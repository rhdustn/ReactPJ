import React, { useEffect, useState } from 'react';
import { LikeSize } from './boarddetail.styled';
import { ipUrl } from '../../util/util';

const LikesBtn = ({ commentIndex }) => {
  const ImgPath = "/imgs/icons";
  const [likes, setLikes] = useState(); 

  const LikesClick = async () => {
    try {
      if (!likes) {
        await ipUrl.post(
          `/post/updatelikes/${commentIndex}`,
          { comment_id: commentIndex },
          { withCredentials: true }
        );
        setLikes(true);
      } else {
        await ipUrl.get(`/post/deleltlikes/${commentIndex}`, { withCredentials: true });
        setLikes(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <LikeSize
        onClick={LikesClick}
        src={likes ? `${ImgPath}/like3.png` : `${ImgPath}/like1.png`}
        alt=""
      />
    </div>
  );
};

export default LikesBtn;