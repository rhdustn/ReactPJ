import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { QueryCache, QueryClient, useMutation, useQuery, useQueryClient } from 'react-query'
import { AdminMidBox, Btn, BtnBox, Title, User, UserBox } from './Admin.styled'
import { ipUrl } from '../../util/util';

const AdminMid = () => {
    const queryClient = useQueryClient();

    const getUsers = async () => {
        try {
            console.log('어드민')
            const users = await ipUrl.get("/admin/users")
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
    useEffect(() => {
        console.log(isLoading)
    }, [isLoading])


    // 승인
    const tryAuthUser = async (user_id) => {
        try {
            await ipUrl.post(`/admin/auth/${user_id}`)
        } catch (error) {
            console.log(error);
        }
    }
    // 강등
    const tryUnauthUser = async (user_id) => {
        try {
            await ipUrl.post(`/admin/unauth/${user_id}`)
        } catch (error) {
            console.log(error);
        }
    }

    // 거절 & 삭제
    const tryDeleteUser = async (user_id) => {
        console.log(user_id)
        try {
            await ipUrl.post(`/admin/del/${user_id}`)
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
    const delUser = useMutation(tryDeleteUser, {
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
                                <Btn onClick={() => {
                                    delUser.mutate(value.user_id)
                                }} back={'#ff3131'}>거절</Btn>
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
                                <Btn onClick={() => {
                                    delUser.mutate(value.user_id)
                                }} back={'#737373'}>삭제</Btn>
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
