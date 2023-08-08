import React, { useEffect } from 'react'

import { AddBtn, Selected, ShowSelectedBox } from './Place.styled'

import city from '../../img/places/city.jpeg'

const AddPlaceBottom = ({suggested, choiceIndex}) => {
    useEffect(() => {
        console.log(choiceIndex)
    }, [])

  return (
    <>
      <ShowSelectedBox>
        {choiceIndex.map((value, index) => {
            console.log(suggested[value]);
            return (
                <Selected>
                    <img src={city}></img>
                    <div>{suggested[value]}</div>
                </Selected>
            )
        })}
      </ShowSelectedBox>
      <AddBtn>선택완료</AddBtn>
    </>
  )
}

export default AddPlaceBottom
