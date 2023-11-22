import React, {useState} from 'react';
import {Button, Flex} from 'antd';
import {SignUpTelForm} from './components/forms/SignUpTelForm';
import {SignUpCodeForm} from './components/forms/SignUpCodeForm';

export const SignUpTel = () => {
  const [step, setStep] = useState(2);

  const handlerSetStep = (step: number) => {
    setStep(step);
  };

  return (
    <div className="as__auth_sign-up-tel">
      {/*<Flex align="center" justify="end">*/}
      {/*  <Button*/}
      {/*    type="primary"*/}
      {/*    shape="circle"*/}
      {/*    icon={<i className="fa-solid fa-angle-left"/>}*/}
      {/*    onClick={() => handlerSetStep('step1')}*/}
      {/*  />*/}
      {/*</Flex>*/}
      {step === 1 ? <SignUpTelForm/> : <SignUpCodeForm/>}
    </div>
  );
};