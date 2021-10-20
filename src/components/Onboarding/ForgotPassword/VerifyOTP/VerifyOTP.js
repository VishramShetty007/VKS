import { Button, Form } from 'antd';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from '../forgotpassword.module.scss';
import backIcon from 'assets/icons/back-white.png';
import { Heading, Desc } from 'components/Global/Typography';

const VerifyOTP = () => {
  const [otp, setOTP] = useState('');
  const [username, setUsername] = useState('');
  const [otpError, setOTPError] = useState(false);
  const [otpTime, setOTPTime] = useState(60);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const generateOTP = () => {
    const reqBody = {};
    const isEmail = isNaN(localStorage.getItem('username'));

    if (isEmail) {
      reqBody.emailId = username;
    } else {
      reqBody.mobNo = username;
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (otp) => {
    if (otp.length < 4) {
      setOTPError(true);
    } else {
      setOTPError(false);
    }
    setOTP(otp);
  };

  const resetOTP = () => {
    setOTP('');
    setOTPTime(60);
    generateOTP();
  };

  useEffect(() => {
    const otpIntervel = setInterval(() => {
      setOTPTime((time) => time && time - 1);
    }, 1000);

    setUsername(localStorage.getItem('username'));

    return () => {
      clearInterval(otpIntervel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Link to="/auth/forgot-password">
        <img
          src={backIcon}
          alt="back"
          className={`${style.goBackButton} mb-3`}
        />
      </Link>
      <Heading text="Verify OTP" classList="mb-3 mb-lg-4" />
      <Desc
        text={`Please enter the 4-digit OTP sent to ${username
          .slice(0, 5)
          .replace(/[a-zA-z0-9]/g, '*')}${username.slice(
          5
        )} to reset your password.`}
        classList={`fnt-400 fnt-msrt mb-4 pb-3 fnt-sm`}
      />
      <Form
        name="otp-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        size={'large'}
        className="form-large"
        onFinishFailed={onFinishFailed}
      >
        <Form.Item>
          <div className={style.otpWrapper}>
            <OtpInput
              className={style.otpField}
              value={otp}
              onChange={handleChange}
              numInputs={4}
              isInputNum={true}
              separator={''}
            />
          </div>
        </Form.Item>
        {otpError && <p className="error-item">Please enter otp</p>}
        <div className="row m-0">
          <div className="col-6 p-0">
            <Desc
              text="Didn’t receive OTP?"
              classList={`fnt-400 fnt-msrt mb-4 pb-3 fnt-sm`}
            />
          </div>
          <div className="col-6 p-0 text-right">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              className={`${style.textlink} d-inline-flex align-items-center`}
              onClick={resetOTP}
            >
              <p>Resend OTP in </p>
              <span
                style={{ textDecoration: 'none' }}
              >{` ${otpTime} sec`}</span>
            </a>
          </div>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="c-button w-100 text-uppercase text-center"
          >
            Continue
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default VerifyOTP;
