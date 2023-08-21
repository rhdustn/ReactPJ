import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { QueryCache, QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'

import { AdminMidBox, Btn, BtnBox, Title, User, UserBox } from './Admin.styled'

const AdminMid = () => {
    const queryClient = useQueryClient();

    const getUsers = async () => {
        try {
            const users = await axios.get("http://localhost:8080/admin/users")
            const data = users.data;
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const {data, isLoading} = useQuery(['users'], getUsers)

    useEffect(() => {
        console.log(data)
    }, [data])


    // 승인
    const tryAuthUser = async (user_id) => {
        try {
            await axios.post(`http://localhost:8080/admin/auth/${user_id}`)
        } catch (error) {
            console.log(error);
        }
    }
    // 강등
    const tryUnauthUser = async (user_id) => {
        try {
            await axios.post(`http://localhost:8080/admin/unauth/${user_id}`)
        } catch (error) {
            console.log(error);
        }
    }

    const authUser = useMutation(tryAuthUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })
    const unAuthUser = useMutation(tryUnauthUser, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })

  return (
    <>
      <AdminMidBox>

        <Title>대기 중인 유저</Title>
        {!isLoading && 
        <UserBox>
            {data.map((value, index) => {
                if(value.is_accept == false) {
                    return (
                        <User key={index}>
                            <div className='user-index'>{index + 1}</div>
                            <div className='user-id'>{value.user_id} ({value.nickname})</div>
                            <BtnBox>
                                <Btn onClick={() => {
                                    authUser.mutate(value.user_id)
                                }} back={'#277bc0'}>승인</Btn>
                                <Btn back={'#ff3131'}>거절</Btn>
                            </BtnBox>
                        </User>
                    )
                }
            })}
        </UserBox>
        }

        <Title>승인 완료된 유저</Title>
        {!isLoading && 
        <UserBox>
            {data.map((value, index) => {
                if(value.is_accept == true) {
                    return (
                        <User key={index}>
                            <div className='user-index'>{index + 1}</div>
                            <div className='user-id'>{value.user_id} ({value.nickname})</div>
                            <BtnBox>
                                <Btn onClick={() => {
                                    unAuthUser.mutate(value.user_id)
                                }} back={'#737373'}>강등</Btn>
                                <Btn back={'#737373'}>삭제</Btn>
                            </BtnBox>
                        </User>
                    )
                }
            })}
        </UserBox>
        }

      </AdminMidBox>
    </>
  )
}

export default AdminMid
