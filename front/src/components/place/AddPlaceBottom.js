import React, { useEffect } from 'react'

import { AddBtn, Selected, ShowSelectedBox } from './Place.styled'

import city from '../../img/places/city.jpeg'

const AddPlaceBottom = ({choiceIndex}) => {
    useEffect(() => {
        console.log(choiceIndex)
    }, [])

  return (
    <>
      <ShowSelectedBox>
        {choiceIndex.map((value, index) => {
            return (
                <Selected key={index}>
                    <img src={city}></img>
                    <div>{value}</div>
                </Selected>
            )
        })}
      </ShowSelectedBox>
      <AddBtn>선택완료</AddBtn>
    </>
  )
}

export default AddPlaceBottom
