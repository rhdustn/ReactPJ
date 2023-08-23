import React, { useEffect } from 'react'

import { AddBtn, Selected, ShowSelectedBox, Wrap1 } from './PlacePc.styled'


const AddPlaceBottom = ({choiceIndex}) => {
const city = '/imgs/places/city.jpeg'
useEffect(() => {
        console.log(choiceIndex)
    }, [])

  return (
    <>
      <Wrap1>
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
      </Wrap1>
    </>
  )
}

export default AddPlaceBottom
