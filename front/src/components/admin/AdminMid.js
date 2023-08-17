import React from 'react'
import { AdminMidBox, Title, UserBox } from './Admin.styled'

const AdminMid = () => {
    

  return (
    <>
      <AdminMidBox>

        <Title>대기 중인 유저</Title>
        <UserBox>

        </UserBox>

        <Title>승인 완료된 유저</Title>
        <UserBox>

        </UserBox>

      </AdminMidBox>
    </>
  )
}

export default AdminMid
