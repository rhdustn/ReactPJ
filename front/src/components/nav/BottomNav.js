import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import { BottomNavBox, BottomNavBtn } from './Nav.styled'

import home1 from '../../img/icons/home1.png'
import home2 from '../../img/icons/home2.png'
import plan1 from '../../img/icons/plan1.png'
import plan2 from '../../img/icons/plan2.png'
import star1 from '../../img/icons/star1.png'
import star2 from '../../img/icons/star2.png'

const BottomNav = ({page}) => {
    const nav = useNavigate();

    const [icons, setIcon] = useState({
        home : home1,
        plan : plan2,
        star : star2
    })

    useEffect(() => {
        if(page == 'page') {
            setIcon({
                home : home2,
                plan : plan1,
                star : star2
            })
        }
    }, [icons])

    const moveTo = (num) => {
        if(num == 0) {
            nav('/')
        }else if(num == 1) {
            nav('/plan')
            // nav('/planAll')
        }else if(num == 2) {
            nav('/board')
        }else if(num == 3) {
            nav('/mypage')
        }
    }

    return (
        <>
        <BottomNavBox>
            <BottomNavBtn onClick={() => moveTo(0)}>
                <img src={icons.home}></img>
                <p>홈</p>    
            </BottomNavBtn>
            <BottomNavBtn onClick={() => moveTo(1)}>
                <img src={icons.plan}></img>
                <p>일정</p>
            </BottomNavBtn>
            <BottomNavBtn onClick={() => moveTo(2)}>
                <img src={icons.star}></img>
                <p>리뷰</p>
            </BottomNavBtn>
            <BottomNavBtn onClick={() => moveTo(3)}>
                <img src={home2} className='profile_img'></img>
                <p>마이페이지</p>
            </BottomNavBtn>
        </BottomNavBox>
        </>
    )
}

export default BottomNav
