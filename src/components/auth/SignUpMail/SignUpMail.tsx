import React, {useState} from 'react';
import {SignUpMailForm} from './components/forms/SignUpMailForm';
import {SignUpPasswordForm} from './components/forms/SignUpPasswordForm';
import {Button, Flex} from 'antd';

export const SignUpMail = () => {
  const [step, setStep] = useState(1);

  const handlerSetStep = (step: number) => {
    setStep(step);
  };

  return (
    <div className="as__auth_sign-up-mail">
      {/*<Flex align="center" justify="end">*/}
      {/*  <Button*/}
      {/*    type="primary"*/}
      {/*    shape="circle"*/}
      {/*    icon={<i className="fa-solid fa-angle-left"/>}*/}
      {/*    onClick={() => handlerSetStep('step1')}*/}
      {/*  />*/}
      {/*</Flex>*/}
      {step === 1 ? <SignUpMailForm/> : <SignUpPasswordForm/>}
    </div>
  );
};