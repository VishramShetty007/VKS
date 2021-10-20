import { Desc, Heading } from 'components/Global/Typography';
import { Link, useHistory } from 'react-router-dom';

import { Form, Input, Button, message } from 'antd';
import { LockOutlined } from '@ant-design/icons';

import style from '../forgotpassword.module.scss';

import onBoardStyle from '../../onboarding.module.scss';

import backIcon from 'assets/icons/back-white.png';
import { API } from 'components/Global/Util/Constants';

const NewPassword = () => {
  const history = useHistory();

  const onFinish = (values) => {
    const { password } = values;
    fetch(
      `${
        API.host
      }/user/v2/setNewPassword?password=${password}&username=${localStorage.getItem(
        'username'
      )}`,
      {
        headers: {
          'Content-Type': 'application/json',
          // Application_Key: API.public_key,
          Application_Key:'ac3e3991-5edf-4f6a-b042-26ebf9b90bf8',
          role: 'ECA'
        }
      }
    )
      .then((res) => {
        message.success('Password changed');
        setTimeout(() => {
          localStorage.removeItem('username');
          history.push('/auth/forgot-password/password-change-success');
        }, 1000);
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Link to="/auth/forgot-password/verify-otp">
        <img
          src={backIcon}
          alt="back"
          className={`${style.goBackButton} mb-3`}
        />
      </Link>
      <Heading text="Set New Password" classList="mb-3 mb-lg-4" />
      <Desc
        text="Set your new password"
        classList={`fnt-400 fnt-msrt mb-4 pb-3 fnt-sm`}
      />
      <div className={onBoardStyle.content}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="form-large"
          size={'large'}
          onFinishFailed={onFinishFailed}
        >
          <div className="row mt-0 mx-0">
            <div className="col-12 mb-3 p-0">
              <Desc
                text="New Password"
                classList={`fnt-400 fnt-msrt mb-2 fnt-sm`}
              />
              <Form.Item
                className="mb-3"
                name="password"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!'
                  }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Enter new password"
                />
              </Form.Item>
              <Desc
                text="Confirm Password"
                classList={`fnt-400 fnt-msrt mb-2 fnt-sm`}
              />
              <Form.Item
                className="mb-5"
                name="confirm-password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!'
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        'The two passwords that you entered do not match!'
                      );
                    }
                  })
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Re-enter new password"
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
      </div>
    </>
  );
};

export default NewPassword;
