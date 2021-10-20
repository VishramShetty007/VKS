import { Desc, Heading } from 'components/Global/Typography';
import style from '../onboarding.module.scss';
import SignInForm from './SignInForm';

const SignIn = () => {
  return (
    <>
      <Heading
        text="Welcome"
        classList="mb-2"
        variant="h4"
      />
      <Desc
        text="Login through your user ID and password. "
        classList={`fnt-400 text-left fnt-msrt mb-4 pb-3 fnt-sm`}
      />
      <div className={style.content}>
        <SignInForm />
      </div>
    </>
  );
};

export default SignIn;
