import React, { useEffect, useState } from 'react'
import { ProflieImg } from './mypage.styled'

const MypageImg = ({profile_img}) => {
  const default_profile = '/imgs/profiles/default_profile.jpeg'
  const ImgPath = "/imgs/profiles"

  const [profileImg, setProfileImg] = useState('')

  useEffect(() => {
    if(profile_img == null) {
      setProfileImg(default_profile)
    }else {
      setProfileImg(profile_img)
    }
  }, [])

  return (
    <div>
      <ProflieImg>
        <img src={`${ImgPath}/${profileImg}`}></img>
      </ProflieImg>
      </div>
  )
}

export default MypageImg