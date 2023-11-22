import React, {useState} from 'react';
import {SignUpDefaultForm} from '../forms/SignUpForms/SignUpDefaultForm';
import {SignUpPasswordForm} from '../forms/SignUpForms/SignUpPasswordForm';
import {Button} from 'antd';

export const SignUp = () => {
  const [step, setStep] = useState('step2')

  const handlerSetStep = (step:string) => {
    setStep(step)
  }

  return (
    <>
      <Button type="primary" shape="circle" icon={<i className="fa-solid fa-angle-left"/>}/>
      {step === 'step1' && <SignUpDefaultForm onSetStep={handlerSetStep}/>}
      {step === 'step2' && <SignUpPasswordForm/>}
    </>
  );
};