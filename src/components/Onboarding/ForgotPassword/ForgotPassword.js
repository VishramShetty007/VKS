import style from "./forgotpassword.module.scss";
import onBoardStyle from "../onboarding.module.scss";

import { Link } from "react-router-dom";
import { Desc, Heading } from "components/Global/Typography";
import ForgotPasswordForm from "./ForgotPasswordForm";

import backIcon from "assets/icons/back-white.png";

const ForgotPassword = () => {
  return (
    <>
      <Link to="/auth/signin">
        <img
          src={backIcon}
          alt="back"
          className={`${style.goBackButton} mb-3`}
        />
      </Link>
      <Heading text="Forgot Password" classList="mb-3 mb-lg-4" />
      <Desc
        text="Please enter your email address or phone number to reset your password."
        classList={`fnt-400 fnt-msrt mb-4 pb-3 fnt-sm`}
      />
      <div className={onBoardStyle.content}>
        <ForgotPasswordForm />
      </div>
    </>
  );
};

export default ForgotPassword;
