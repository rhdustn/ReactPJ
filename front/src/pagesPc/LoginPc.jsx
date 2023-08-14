import React from 'react'

import SignupTop from '../componentsPc/signup/SignupTopPc'
import SignupMid from '../componentsPc/signup/SignupMidPc'
import SignupBottom from '../componentsPc/signup/SignupBottomPc'

const LoginPc = () => {
  return (
    <>
      <SignupTop />
      <SignupMid page={'로그인'} />
      <SignupBottom page={'로그인'} />
    </>
  )
}

export default LoginPc
