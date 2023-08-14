import React, { useState } from 'react';
import { Recommentdiv, Recommentbox } from './boarddetail.styled';

const ReComment = ({ initComment, onSave }) => {
  const [data, setData] = useState(false);
  const [recomment, setRecomment] = useState(initComment);

  const recommentbox = () => {
    setData(!data);
  };

  const reCommentClick = (e) => {
    setRecomment(e.target.value);
  };

  const handleSave = () => {
    onSave(recomment);
    recommentbox();
  };

  return (
    <div>
       {initComment && (
        <div>
          ↳ {initComment}
        </div>
      )}
      <Recommentdiv onClick={recommentbox}>답글달기</Recommentdiv>
      {data && (
        <Recommentbox>
          <input
            type="text"
            placeholder="대댓글 작성"
            value={recomment}
            onChange={reCommentClick}
          />
          <button onClick={handleSave}>Save</button>
        </Recommentbox>
      )}
     
    </div>
  );
};

export default ReComment;