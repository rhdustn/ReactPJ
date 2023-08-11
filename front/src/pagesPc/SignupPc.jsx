import React from 'react'
import SignupTop from '../componentsPc/signup/SignupTopPc'
import SignupMid from '../componentsPc/signup/SignupMidPc'
import SignupBottom from '../componentsPc/signup/SignupBottomPc'

const SignupPc = () => {
  return (
    <>
      <SignupTop />
      <SignupMid page={'회원가입'} />
      <SignupBottom page={'회원가입'} />
    </>
  )
}

export default SignupPc
