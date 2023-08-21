import React from 'react'
import { AdminMidBox, Btn, BtnBox, Title, User, UserBox } from './Admin.styled'

const AdminMid = () => {
    
    let users = [
        {
            id : 1,
            user_id : 'aaa',
            user_pw : 'aaa',
            nickname : 'aaa',
            level : 0
        },
        {
            id : 2,
            user_id : 'bbb',
            user_pw : 'bbb',
            nickname : 'bbb',
            level : 1
        }
    ]

  return (
    <>
      <AdminMidBox>


        <Title>대기 중인 유저</Title>
        <UserBox>
            {users.map((value, index) => {
                if(value.level == 0) {
                    return (
                        <User key={index}>
                            <div className='user-index'>{index + 1}</div>
                            <div className='user-id'>{value.user_id} ({value.nickname})</div>
                            <BtnBox>
                                <Btn back={'#277bc0'}>승인</Btn>
                                <Btn back={'#ff3131'}>거절</Btn>
                            </BtnBox>
                        </User>
                    )
                }
            })}
        </UserBox>

        <Title>승인 완료된 유저</Title>
        <UserBox>
            {users.map((value, index) => {
                if(value.level == 1) {
                    return (
                        <User key={index}>
                            <div className='user-index'>{index + 1}</div>
                            <div className='user-id'>{value.user_id} ({value.nickname})</div>
                            <BtnBox>
                                <Btn back={'#737373'}>강등</Btn>
                                <Btn back={'#737373'}>삭제</Btn>
                            </BtnBox>
                        </User>
                    )
                }
            })}
        </UserBox>

      </AdminMidBox>
    </>
  )
}

export default AdminMid
