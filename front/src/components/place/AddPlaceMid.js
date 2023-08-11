import React, { useEffect, useState } from 'react'
import { AddPlaceMidBox, Title, PlaceBox, ImgBox, PlaceName, SelectBtnBox, SelectBtn } from './Place.styled'

import city from '../../img/places/city.jpeg'

const AddPlaceMid = ({page, day, placeArr, choiceIndex, setChoice}) => {
    let p;
    let btn;
    if(page == 'add') {
        p = '추천'
        btn = '선택'
    }else if(page == 'edit') {
        p = '선택'
        btn = '삭제'
    }

    const isChoice = (index) => {
        if(choiceIndex.indexOf(index) !== -1) {
            let arr = choiceIndex.filter((value) => value !== index)
            setChoice(arr);
        }else {
            if(choiceIndex == '') {
                setChoice([index])
            }else {
                setChoice([...choiceIndex, index]);
            }
        }
    }


  return (
    <>
      <AddPlaceMidBox>
        <Title>day{day} {p} 장소</Title>
        {placeArr.map((value, index) => {
            if(choiceIndex.indexOf(index) == -1) {
                return (
                    <PlaceBox key={index}>
                        <ImgBox><img src={city}></img></ImgBox>
                        <PlaceName>{value}</PlaceName>
                        <SelectBtnBox>
                            <SelectBtn onClick={() => {isChoice(index)}} back={'#edebeb'} font={'#9b9a9a'}>{btn}</SelectBtn>
                        </SelectBtnBox>
                    </PlaceBox>
                )
            }else {
                return (
                    <PlaceBox key={index}>
                        <ImgBox><img src={city}></img></ImgBox>
                        <PlaceName>{value}</PlaceName>
                        <SelectBtnBox>
                            
                            <SelectBtn onClick={() => {isChoice(index)}} back={'#277bc0'} font={'white'}>{btn}</SelectBtn>
                        </SelectBtnBox>
                    </PlaceBox>
                )
            }
        })}
      </AddPlaceMidBox>
    </>
  )
}

export default AddPlaceMid
