import React, { useEffect, useState } from 'react';
import { LikeSize2 } from './boarddetail.styled';
import { ipUrl } from '../../util/util';

const BoardLikes = ({ boardIndex }) => {
  const ImgPath = "/imgs/icons";
  const [boardLikes, setBoardLikes] = useState(false);

  const LikesClick = async () => {
    try {
      if (!boardLikes) {
        await ipUrl.post(
          `/post/updateboardlikes/${boardIndex}`,
          { board_id: boardIndex },
          { withCredentials: true }
        );
        setBoardLikes(true); // 좋아요 추가 시 상태를 true로 업데이트
      } else {
        await ipUrl.get(`/post/deleltboardlikes/${boardIndex}`, { withCredentials: true });
        setBoardLikes(false); // 좋아요 삭제 시 상태를 false로 업데이트
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <LikeSize2
        onClick={LikesClick}
        src={boardLikes ? `${ImgPath}/like3.png` : `${ImgPath}/like1.png`}
        alt=""
      />
    </div>
  );
};

export default BoardLikes;
