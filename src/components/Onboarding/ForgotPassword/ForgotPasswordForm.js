import { Form, Input, Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Desc } from 'components/Global/Typography';
import { useHistory } from 'react-router-dom';
import { API } from 'components/Global/Util/Constants';

const ForgotPasswordForm = (props) => {
  const history = useHistory();

  const onFinish = (values) => {
    const { username } = values;

    const reqBody = {};

    const isEmail = isNaN(username);

    if (isEmail) {
      reqBody.emailId = username;
    } else {
      reqBody.mobNo = username;
    }

    fetch(`${API.host}/user/v2/generateOTP`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Application_Key: 'ac3e3991-5edf-4f6a-b042-26ebf9b90bf8',
        role: 'ECA'
      },
      body: JSON.stringify(reqBody)
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        if (data.message === 'Success') {
          localStorage.setItem('username', username);
          message.success('verified');
          setTimeout(() => {
            history.push(`/auth/forgot-password/verify-otp`);
          }, 1000);
        }
      })
      .catch((error) => {
        message.error('Something has gone wrong');
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      size={'large'}
      className="form-large"
      onFinishFailed={onFinishFailed}
    >
      <div className="row mt-0 mx-0">
        <div className="col-12 mb-3 p-0">
          <Desc text="User name" classList={`fnt-400 fnt-msrt mb-2 fnt-sm`} />
          <Form.Item
            className="mb-5"
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="E-mail address or mobile number"
            />
          </Form.Item>
          <Form.Item className="mb-0">
            <Button
              type="primary"
              htmlType="submit"
              className="c-button w-100 text-uppercase text-center"
            >
              Continue
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default ForgotPasswordForm;
