import React, {useState} from 'react';
import {SignUpDefaultForm} from '../forms/SignUpForms/SignUpDefaultForm';
import {SignUpPasswordForm} from '../forms/SignUpForms/SignUpPasswordForm';

export const SignUp = () => {
  const [step, setStep] = useState('step1')

  const handlerSetStep = (step:string) => {
    setStep(step)
  }

  return (
    <>
      {step === 'step1' && <SignUpDefaultForm onSetStep={handlerSetStep}/>}
      {step === 'step2' && <SignUpPasswordForm/>}
    </>
  );
};