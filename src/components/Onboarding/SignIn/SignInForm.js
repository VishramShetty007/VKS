import { Form, Input, Button, message } from 'antd';
import { useHistory } from 'react-router-dom';
import {
  UserOutlined,
  KeyOutlined,
  EyeTwoTone,
  EyeInvisibleTwoTone
} from '@ant-design/icons';

const SignInForm = () => {
  const history = useHistory();

  const onFinish = (values) => {
    console.log('Success:', values);
    if (values) {
      if (
        values.username === 'admin' &&
        values.password === 'qwerty'
      ) {
        message.success('Logging In...');
        setTimeout(() => {
          history.push('/dashboard');
        }, 1500);
      } else {
        message.error('Incorrect Credential Provided');
      }
    }
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
      onFinishFailed={onFinishFailed}
      className="form-large"
    >
      <div className="row mt-2 mx-0">
        <div className="col-12 mb-4 p-0">
          <Form.Item
            className="mb-0"
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              hasFeedback
              placeholder="E-mail address"
            />
          </Form.Item>
        </div>
        <div className="col-12 mb-4 p-0">
          <Form.Item
            className="mb-0"
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={
                <KeyOutlined rotate={-180} className="site-form-item-icon" />
              }
              type="password"
              placeholder="Enter your password"
              iconRender={(visible) =>
                visible ? (
                  <EyeTwoTone twoToneColor="#007bff" />
                ) : (
                  <EyeInvisibleTwoTone twoToneColor="#007bff" />
                )
              }
            />
          </Form.Item>
        </div>
        <div className="col-12 mb-2 p-0">
          {/* <Form.Item className="mb-4">
            <div className="row m-0">
              <div className="col-6 p-0">
                <Form.Item name="remember" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </div>
              <div className="col-6 p-0">
                <Link to="/auth/forgot-password" className={style.textlink}>
                  <p>forgot password</p>
                </Link>
              </div>
            </div>
          </Form.Item> */}
          <Form.Item className="mb-0">
            <Button
              htmlType="submit"
              style={{ width: 250 }}
              className={`antd-Vbtn text-capitalize text-center`}
            >
              Login
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default SignInForm;
