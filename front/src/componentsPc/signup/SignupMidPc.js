import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from 'react-query'
import { Input, InputBox, Label, SignupMidBox, Text, ChkBtn, Title, TryBtn } from './SignupPc.styled'

const SignupMid = ({page}) => {
    const [user_id, setId] = useState();
    const [user_pw, setPw] = useState();
    const [nickname, setNickname] = useState();
    const [email, setEmail] = useState();

    const [textId, setTextId] = useState('')
    const [textPw, setTextPw] = useState('')
    const [textEmail, setTextEmail] = useState('')
    const [textNick, setTextNick] = useState('')

    const [textColor, setTextColor] = useState({
        idColor : 'red',
        pwColor : 'red',
        emailColor : 'red',
        nickColor : 'red'
    })

    // 아이디 중복 체크
    const dupChk1 = () => {
        console.log("아이디 중복 체크", user_id)
        
        if(user_id == undefined) {
            return;
        }else {
            // useMutation 사용해서 axios post 보내기
            // const data = useMutation();
            const data = ''

            if(data == '중복') {
                setTextId('사용이 불가능한 아이디입니다. 다시 입력 부탁드립니다.')
                setTextColor({
                    ...textColor,
                    idColor : 'red'
                })
            }else {
                setTextId('사용 가능한 아이디입니다.')
                setTextColor({
                    ...textColor,
                    idColor : '#277bc0'
                })
            }
        }
    }
    // 닉네임 중복 체크
    const dupChk2 = () => {
        console.log("닉네임 중복 체크", nickname)

        if(nickname == undefined) {
            return;
        }else {
            // useMutation 사용해서 axios post 보내기
            // const data = useMutation();
            const data = '중복'

            if(data == '중복') {
                setTextNick('사용이 불가능한 닉네임입니다. 다시 입력 부탁드립니다.')
                setTextColor({
                    ...textColor,
                    nickColor : 'red'
                })
            }else {
                setTextNick('사용 가능한 닉네임입니다.')
                setTextColor({
                    ...textColor,
                    nickColor : '#277bc0'
                })
            }
        }
    }
    // 이메일 형식 확인 정규식
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 최종 회원가입
    const trySignup = () => {
        console.log("trySignup")
        // 중복 체크 완료, 이메일 형식 체크 된 후 post 날리기
    }


    // 로그인 체크
    const tryLogin = () => {
        // 아이디 없을 때
        // 비밀번호 틀렸을 때
    }


    if(page == '회원가입') {
        return (
            <>
              <SignupMidBox>
                <Title>{page}</Title>
                <InputBox>
                    <Label>아이디</Label>
                    <Input onChange={(e) => setId(e.target.value)} type='text'></Input>
                    <ChkBtn onClick={dupChk1}>중복 확인</ChkBtn>
                    <Text color={textColor.idColor}>{textId}</Text>
                </InputBox>
                <InputBox>
                    <Label>비밀번호</Label>
                    <Input onChange={(e) => setPw(e.target.value)} type='password'></Input>
                    <Text color={textColor.pwColor}>{textPw}</Text>
                </InputBox>
                <InputBox>
                    <Label>이메일</Label>
                    <Input onChange={(e) => {
                        let isValidEmail = emailRegex.test(e.target.value);
                        if(isValidEmail == false) {
                            setTextEmail('올바른 이메일 형식이 아닙니다.')
                            setTextColor({
                                ...textColor,
                                emailColor : 'red'
                            })
                        }else if(isValidEmail == true) {
                            setTextEmail('사용 가능한 이메일 형식입니다.')
                            setTextColor({
                                ...textColor,
                                emailColor : '#277bc0'
                            })
                            setEmail(e.target.value)
                        }
                    }}
                    type='email'></Input>
                    <Text color={textColor.emailColor}>{textEmail}</Text>
                </InputBox>
                <InputBox>
                    <Label>닉네임</Label>
                    <Input onChange={(e) => {setNickname(e.target.value)}} type='text'></Input>
                    <ChkBtn onClick={dupChk2}>중복 확인</ChkBtn>
                    <Text color={textColor.nickColor}>{textNick}</Text>

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
                    <Text color={textColor.idColor}>{textId}</Text>
                </InputBox>
                <InputBox>
                    <Label>비밀번호</Label>
                    <Input type='password'></Input>
                    <Text color={textColor.pwColor}>{textPw}</Text>

                    <TryBtn>{page}</TryBtn>
                </InputBox>
              </SignupMidBox>
            </>
          )
    }
}

export default SignupMid
