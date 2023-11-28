import React, {useState} from 'react'
import {Button} from 'antd'
import {SignUpPasswordForm} from '@/components/auth/forms/SignUpPasswordForm'
import {SignUpMailForm} from '@/components/auth/forms/SignUpMailForm'

export const SignUpMail = () => {
  const [step, setStep] = useState(1)

  const handlerSetStep = (step: number) => {
    setStep(step)
  }

  return (
    <div className="as__auth_sign-up-mail">
      {step === 2 && (
        <Button
          type="primary"
          shape="circle"
          icon={<i className="fa-solid fa-angle-left" />}
          onClick={() => handlerSetStep(1)}
        />
      )}
      {step === 1 ? <SignUpMailForm onSetStep={setStep} /> : <SignUpPasswordForm />}
    </div>
  )
}
