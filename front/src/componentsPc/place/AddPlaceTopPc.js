import React, {useState} from 'react'

import { AddPlaceTopBox, InputBox } from './PlacePc.styled'

import search from '../../img/icons/search.png'

const AddPlaceTop = () => {
    const [place, setPlace] = useState([]);

  return (
    <>
    <AddPlaceTopBox>
        <InputBox>
          <input onChange={(e) => {setPlace(e.target.value)}} type='text' placeholder='관광지 검색'></input>
          <img src={search}></img>
        </InputBox>
    </AddPlaceTopBox>
    </>
  )
}

export default AddPlaceTop
