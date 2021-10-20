import { Button } from 'antd';
import { Link } from 'react-router-dom';
import successIcon from 'assets/icons/success.svg';
import { Desc, Heading } from 'components/Global/Typography';

const PasswordChangeSuccess = () => {
  return (
    <div className={`text-center`}>
      <img
        src={successIcon}
        alt="success"
        className="mb-4"
        style={{ width: 80, height: 80 }}
      />
      <Heading text="Password change successful" classList="text-center mb-3" />
      <Desc
        text="Your password has been changed successfully. Please Sign In with your email id and password."
        classList={`fnt-400 fnt-msrt mb-4 pb-3 fnt-sm text-center`}
      />
      <Link to="/auth/signin">
        <Button
          type="primary"
          className="c-button w-100 text-uppercase text-center"
        >
          Sign In
        </Button>
      </Link>
    </div>
  );
};

export default PasswordChangeSuccess;
