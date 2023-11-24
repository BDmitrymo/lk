import React, {useState} from 'react';
import {Button} from 'antd';
import {SignUpTelForm} from './components/forms/SignUpTelForm';
import {SignUpCodeForm} from './components/forms/SignUpCodeForm';

export const SignUpTel = () => {
  const [step, setStep] = useState(1);

  const handlerSetStep = (step: number) => {
    setStep(step);
  };

  return (
    <div className="as__auth_sign-up-tel">
      {step === 2 && (
        <Button
          type="primary"
          shape="circle"
          icon={<i className="fa-solid fa-angle-left"/>}
          onClick={() => handlerSetStep(1)}
        />
      )}
      {step === 1 ? <SignUpTelForm onSetStep={setStep}/> : <SignUpCodeForm/>}
    </div>
  );
};