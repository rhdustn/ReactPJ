import axios from "axios";
import React, { useEffect } from "react";
import cheerio from "cheerio";
const Test = () => {
  const searchQuery = "후쿠오카";
  const url = `https://www.google.com/search?q=${encodeURIComponent(
    searchQuery
  )}&tbm=isch`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);

        // 이미지 태그 선택자
        const imageSelector = "img.rg_i";

        // 페이지에서 첫 번째 이미지 태그를 선택
        const firstImage = $(imageSelector).first();

        // 이미지 태그의 src 속성에서 이미지 URL 가져오기
        const imageUrl = firstImage.attr("src");

        console.log("첫 번째 이미지 URL:", imageUrl);
      })
      .catch((error) => {
        console.error("에러:", error);
      });
  });
  // axios를 사용하여 페이지 내용 가져오기

  return <div>Test</div>;
};

export default Test;
