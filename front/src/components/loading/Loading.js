import React from 'react'
import { LoadingBox, LoadingCircle } from './Loading.styled'

import loading1 from '../../img/icons/loading1.gif'
import loading2 from '../../img/icons/loading2.gif'

// 2줄 버전
const Loading1 = () => {
  return (
    <>
      <LoadingBox>
        <LoadingCircle>
            <img src={loading1}></img>
        </LoadingCircle>
      </LoadingBox>
    </>
  )
}

// 1줄 버전
const Loading2 = () => {
    return (
      <>
        <LoadingBox>
            <LoadingCircle>
                <img src={loading2}></img>
            </LoadingCircle>
        </LoadingBox>
      </>
    )
  }

export {Loading1, Loading2}
