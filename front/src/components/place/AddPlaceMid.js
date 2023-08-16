import React, { useEffect, useState } from 'react'
import { AddPlaceMidBox, Title, PlaceBox, ImgBox, PlaceName, SelectBtnBox, SelectBtn, PlaceDetail } from './Place.styled'

import city from '../../img/places/city.jpeg'

const AddPlaceMid = ({page, day, suggested, choiceIndex, setChoice}) => {

    const isChoice = (value) => {
        if(choiceIndex.indexOf(value) !== -1) {
            let arr = choiceIndex.filter((va) => va !== value)
            setChoice(arr);
        }else {
            if(choiceIndex == '') {
                setChoice([value])
            }else {
                setChoice([...choiceIndex, value]);
            }
        }
    }


  return (
    <>
      <AddPlaceMidBox>
        <Title>day{day} 추천 장소</Title>
        {suggested.map((value, index) => {
            if(choiceIndex.indexOf(value) == -1) {
                return (
                    <PlaceBox key={index}>
                        <ImgBox><img src={city}></img></ImgBox>
                        <PlaceName>{value.name}</PlaceName>
                        <PlaceDetail>{value.detail}</PlaceDetail>
                        <SelectBtnBox>
                            <SelectBtn onClick={() => {isChoice(value)}} back={'#edebeb'} font={'#9b9a9a'}>선택</SelectBtn>
                        </SelectBtnBox>
                    </PlaceBox>
                )
            }else {
                return (
                    <PlaceBox key={index}>
                        <ImgBox><img src={city}></img></ImgBox>
                        <PlaceName>{value.name}</PlaceName>
                        <PlaceDetail>{value.detail}</PlaceDetail>
                        <SelectBtnBox>
                            
                            <SelectBtn onClick={() => {isChoice(value)}} back={'#277bc0'} font={'white'}>선택</SelectBtn>
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
