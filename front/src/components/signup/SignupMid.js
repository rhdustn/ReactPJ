import React, {useEffect, useState} from 'react'
import { Input, InputBox, Label, SignupMidBox, Text, Title, TryBtn } from './Signup.styled'

const SignupMid = ({page}) => {
    const [user_id, setId] = useState();
    const [user_pw, setPw] = useState();
    const [nickname, setNickname] = useState();
    const [email, setEmail] = useState();

    const [textId, setTextId] = useState('중복 확인')
    const [textEmail, setTextEmail] = useState('')
    const [textNick, setTextNick] = useState('중복 확인')

    // 아이디 중복 체크
    const dupChk1 = () => {
        console.log("아이디 중복 체크", user_id)
        // post 날리기
    }

    // 닉네임 중복 체크
    const dupChk2 = () => {
        console.log("닉네임 중복 체크", nickname)
        // post 날리기
    }

    // 이메일 형식 확인
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    useEffect(() => {
        let isValidEmail = emailRegex.test(email);
        if(isValidEmail == false) {
            setTextEmail('올바른 이메일 형식이 아닙니다.')
        }else if(isValidEmail == true) {
            setTextEmail('사용 가능한 이메일 형식입니다.')
        }
    }, [email])

    // 최종 회원가입
    const trySignup = () => {
        console.log("trySignup")
        // 중복 체크 완료, 이메일 형식 체크 된 후 post 날리기
    }


    if(page == '회원가입') {
        return (
            <>
              <SignupMidBox>
                <Title>{page}</Title>
                <InputBox>
                    <Label>아이디</Label>
                    <Input onChange={(e) => setId(e.target.value)} type='text'></Input>
                    <Text onClick={dupChk1}>{textId}</Text>

                    <Label>비밀번호</Label>
                    <Input onChange={(e) => setPw(e.target.value)} type='password'></Input>
                    
                    <Label>이메일</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type='email'></Input>
                    <Text>{textEmail}</Text>

                    <Label>닉네임</Label>
                    <Input onChange={(e) => {setNickname(e.target.value)}} type='text'></Input>
                    <Text onClick={dupChk2}>{textNick}</Text>

                    <TryBtn onClick={trySignup}>{page}</TryBtn>
                </InputBox>

              </SignupMidBox>
            </>
          )
    }else if(page == '로그인') {
        return (
            <>
              <SignupMidBox>
                <Title>{page}</Title>
                <InputBox>
                    <Label>아이디</Label>
                    <Input type='text'></Input>
                    <Label>비밀번호</Label>
                    <Input type='password'></Input>
                    <TryBtn>{page}</TryBtn>
                </InputBox>
              </SignupMidBox>
            </>
          )
    }
}

export default SignupMid
