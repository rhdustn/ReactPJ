import React, { useEffect, useState } from 'react'
import { AddPlaceMidBox, Title, PlaceBox, ImgBox, PlaceName, SelectBtnBox, SelectBtn, PlaceDetail, NearPlaceBox, Line } from './Place.styled'

import city from '../../img/places/city.jpeg'

const AddPlaceMid = ({page, day, suggested, choiceIndex, setChoice, midHeight}) => {

    const isChoice = (value) => {
        console.log(value);
        if(choiceIndex.indexOf(value) !== -1) {
            let arr = choiceIndex.filter((va) => va !== value)
            console.log(arr);
            setChoice(arr);
        }else {
            if(choiceIndex == '') {
                setChoice([value])
            }else {
                setChoice([...choiceIndex, value]);
            }
        }
    }

    let nearAttractions = [
        {
            name : '111',
            detail : '111',
            attractionLocation : {
                latitude : "35.6329",
                longitude : "139.8804"
            }
        },
        {name : '222'},
        {name : '333'}
    ]


  return (
    <>
      <AddPlaceMidBox midHeight={midHeight}>

        {suggested.map((value, index) => {
            if(choiceIndex.indexOf(value) == -1) {
                return (
                    <>
                    <Title color={'#277bc0'}>AI 추천 관광지</Title>
                    <PlaceBox key={index}>
                        <ImgBox><img src={city}></img></ImgBox>
                        <PlaceName>{value.name}</PlaceName>
                        <PlaceDetail>{value.detail}</PlaceDetail>
                        <SelectBtnBox>
                            <SelectBtn onClick={() => {isChoice(value)}} back={'#edebeb'} font={'#9b9a9a'}>선택</SelectBtn>
                        </SelectBtnBox>
                    </PlaceBox>

                    <Title size={'12px'}>주변 관광지</Title>
                    {nearAttractions.map((value2, index2) => {
                        if(choiceIndex.indexOf(value2) == -1) {
                            return(
                                <>
                                <NearPlaceBox key={index2}>
                                    <ImgBox><img src={city} /></ImgBox>
                                    <PlaceName>{value2.name}</PlaceName>
                                    <SelectBtnBox>
                                        <SelectBtn onClick={() => {isChoice(value2)}} back={'#edebeb'} font={'#9b9a9a'}>선택</SelectBtn>
                                    </SelectBtnBox>
                                </NearPlaceBox>
                                </>
                            )
                        }else {
                            return(
                                <NearPlaceBox key={index2}>
                                    <ImgBox><img src={city} /></ImgBox>
                                    <PlaceName>{value2.name}</PlaceName>
                                    <SelectBtnBox>
                                        <SelectBtn onClick={() => {isChoice(value2)}} back={'#277bc0'} font={'white'}>선택</SelectBtn>
                                    </SelectBtnBox>
                                </NearPlaceBox>
                            )
                        }
                    })}

                    <Line />
                    </>
                )
            }else {
                return (
                    <>
                    <Title color={'#277bc0'}>AI 추천 관광지</Title>
                    <PlaceBox key={index}>
                        <ImgBox><img src={city}></img></ImgBox>
                        <PlaceName>{value.name}</PlaceName>
                        <PlaceDetail>{value.detail}</PlaceDetail>
                        <SelectBtnBox>
                            <SelectBtn onClick={() => {isChoice(value)}} back={'#277bc0'} font={'white'}>선택</SelectBtn>
                        </SelectBtnBox>
                    </PlaceBox>

                    <Title size={'12px'}>주변 관광지</Title>
                    {nearAttractions.map((value2, index2) => {
                        if(choiceIndex.indexOf(value2) == -1) {
                            return(
                                <>
                                <NearPlaceBox key={index2}>
                                    <ImgBox><img src={city} /></ImgBox>
                                    <PlaceName>{value2.name}</PlaceName>
                                    <SelectBtnBox>
                                        <SelectBtn onClick={() => {isChoice(value2)}} back={'#edebeb'} font={'#9b9a9a'}>선택</SelectBtn>
                                    </SelectBtnBox>
                                </NearPlaceBox>
                                </>
                            )
                        }else {
                            return(
                                <NearPlaceBox key={index2}>
                                    <ImgBox><img src={city} /></ImgBox>
                                    <PlaceName>{value2.name}</PlaceName>
                                    <SelectBtnBox>
                                        <SelectBtn onClick={() => {isChoice(value2)}} back={'#277bc0'} font={'white'}>선택</SelectBtn>
                                    </SelectBtnBox>
                                </NearPlaceBox>
                            )
                        }
                    })}

                    <Line />
                    </>
                )
            }
        })}
      </AddPlaceMidBox>
    </>
  )
}

export default AddPlaceMid
