import React, { useEffect } from 'react'

import { AddBtn, Selected, ShowSelectedBox } from './Place.styled'


const AddPlaceBottom = ({choiceIndex, tryComplete}) => {
const city = '/imgs/places/city.jpeg'
  
  return (
    <>
      <ShowSelectedBox>
        {choiceIndex.map((value, index) => {
            return (
                <Selected key={index}>
                    <p>{index+1}</p>
                    <img src={city}></img>
                    <div>{value.name}</div>
                </Selected>
            )
        })}
      </ShowSelectedBox>
      <AddBtn onClick={tryComplete}>선택완료</AddBtn>
    </>
  )
}

export default AddPlaceBottom
