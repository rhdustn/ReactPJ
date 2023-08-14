import React, { useEffect, useState } from "react";
import { PlanTopBox, Title, Date, Selected } from "./PlanPc.styled";
import { useQuery } from "react-query";
import axios from "axios";
const PlanTopPc = () => {
  // main 페이지에서 입력한 정보
  let location = "후쿠오카";
  let date = "2023.08.28 ~ 2023.08.31";
  let who = ["혼자", "반려동물과"];
  let which = ["체험·액티비티", "SNS 핫플레이스"];
  const [picImgArr, setPicImgArr] = useState([]);
  // gpt에서 받아올 정보

  const getAttPic = async ({ queryKey }) => {
    const apiKey = process.env.REACT_APP_PIXABAY_API_KEY;
console.log(apiKey)
    var URL =
      "https://pixabay.com/api/?key=" +
      apiKey +
      "&q=" +
      encodeURIComponent("red roses");

    const getAttPicRes = await axios.get(URL);
    console.log(getAttPicRes.data);
    return getAttPicRes.data;
  };
  const getAttPicQuery = useQuery(["getAttPic", "오사카"], getAttPic, {
    staleTime: 120 * 1000,
    onSuccess: (data) => {
      setPicImgArr([...picImgArr, data]);
    },
  });
  useEffect(() => {
    // getAttPicQuery.refetch();
  }, []);
  return (
    <>
      <PlanTopBox>
        <img
          src={picImgArr[0]?.hits?.[0].largeImageURL}
          width={"400px"}
          height={"400px"}
        />
        <Title>{location} 여행</Title>
        <Date>{date}</Date>
        <Selected>
          {who.map((value, index) => {
            return `${value} `;
          })}
        </Selected>
        <Selected>
          {which.map((value, index) => {
            return `${value} `;
          })}
        </Selected>
      </PlanTopBox>
    </>
  );
};

export default PlanTopPc;
