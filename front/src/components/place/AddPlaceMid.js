import React, { useEffect, useState } from "react";
import {
  AddPlaceMidBox,
  Title,
  PlaceBox,
  ImgBox,
  PlaceName,
  SelectBtnBox,
  SelectBtn,
  PlaceDetail,
  NearPlaceBox,
  Line,
} from "./Place.styled";
import { useDispatch, useSelector } from "react-redux";
import { saveNearAttraction } from "../../redux/features/dataForGpt";
const AddPlaceMid = ({
  page,
  day,
  suggested,
  choiceIndex,
  setChoice,
  midHeight,
  nearPlace,
}) => {
  const [nearAttractions, setnearAttractions] = useState([]);
  // attraction에 관련된 모든 정보가 있는 attractionsWithImg 가져오기
  const attractionsWithImg = useSelector((state) => {
    return state.attractionsWithImg;
  });
  // attraction에 관련된 모든 정보가 있는 attractionsWithImg dispatch
  const attractionsWithImgDispatch = useDispatch();

  // 눌러진 관광지, 이 관광지는 gpt가 뽑아온 메인 관광지 이며 ** 주변관광지가 어느 메인 관광지에 속하는 지 알기 위해 만듦**
  const [parentAttraction, setParentAttraction] = useState("");

  const city = "/imgs/places/city.jpeg";
  useEffect(() => {
    console.log(attractionsWithImg, "유즈 이펙트");
  }, [attractionsWithImg]);


  const isChoice = (value) => {
    // console.log("태초의 위도경도",value.attractionLocation);

    let temp = [];
    // console.log(choiceIndex,'dd')
    if (choiceIndex) {
      temp = choiceIndex.map((a) => {
        return a.name;
      });
    }

    // console.log(temp);
    if (temp.indexOf(value.name) !== -1) {
      let arr = choiceIndex.filter((va) => va.name !== value.name);
      setChoice(arr);
    } else {
      if (choiceIndex == "") {
        setChoice([value]);
      } else {
        setChoice([...choiceIndex, value]);
      }
    }
  };

  useEffect(() => {
    if (nearPlace !== undefined && nearPlace !== "") {
      console.log("d", nearPlace);
      const tempNear = nearPlace.map((place) => {
        console.log("place", place);
        console.log("place", place.name);
        console.log("위도:", place.geometry.location.lat());
        console.log("경도:", place.geometry.location.lng());

        return {
          parentName: parentAttraction,
          name: place.name,
          detail: "디테일",
          attractionLocation: {
            latitude: place.geometry.location.lat(),
            longitude: place.geometry.location.lng(),
          },
        };
      });
      console.log(tempNear, "변변");
      attractionsWithImgDispatch(saveNearAttraction(tempNear));

      console.log("WHA", nearAttractions);
    }
  }, [nearPlace]);

  // let nearAttractions = [
  //   {
  //     name: "111",
  //     detail: "111",
  //     attractionLocation: {
  //       latitude: "35.6329",
  //       longitude: "139.8804",
  //     },
  //   },
  //   { name: "222" },
  //   { name: "333" },
  // ];

  return (
    <>
      <AddPlaceMidBox midHeight={midHeight}>
        {suggested.map((value, index) => {
          // 선택이 되지 않았을때
          if (choiceIndex.indexOf(value) == -1) {
            return (
              <>
                <Title color={"#277bc0"}>AI 추천 관광지</Title>
                <PlaceBox
                  key={index}
                  onClick={() => {
                    isChoice(value);
                  }}
                >
                  <ImgBox>
                    <img src={city}></img>
                  </ImgBox>
                  <PlaceName>{value.name}</PlaceName>
                  <PlaceDetail>{value.detail}</PlaceDetail>
                  <SelectBtnBox>
                    <SelectBtn
                      onClick={() => {
                        isChoice(value);
                        setParentAttraction(value.name);
                      }}
                      back={"#edebeb"}
                      font={"#9b9a9a"}
                    >
                      선택
                    </SelectBtn>
                  </SelectBtnBox>
                </PlaceBox>

                {/* ------------------------------------------------------------- */}
                {/* <Title size={"12px"}>주변 관광지</Title>
                {nearAttractions.map((value2, index2) => {
                        let temp=[];
                        // console.log(choiceIndex,'dd')
                        if (choiceIndex) {
                          temp = choiceIndex.map((a) => {
                            return a.name;
                          });
                        }
                  if (temp.indexOf(value2.name) == -1) {
                    return (
                      <>
                        <NearPlaceBox key={index2}>
                          <ImgBox>
                            <img src={city} />
                          </ImgBox>
                          <PlaceName>{value2.name}</PlaceName>
                          <SelectBtnBox>
                            <SelectBtn
                              // onClick={() => {
                              //   isChoice2(value);
                              // }}
                              back={"#edebeb"}
                              font={"#9b9a9a"}
                            >
                              선택
                            </SelectBtn>
                          </SelectBtnBox>
                        </NearPlaceBox>
                      </>
                    );
                  } else {
                    return (
                      <NearPlaceBox key={index2}>
                        <ImgBox>
                          <img src={city} />
                        </ImgBox>
                        <PlaceName>{value2.name}</PlaceName>
                        <SelectBtnBox>
                          <SelectBtn
                            onClick={() => {
                              isChoice(value2);
                            }}
                            back={"#277bc0"}
                            font={"white"}
                          >
                            선택
                          </SelectBtn>
                        </SelectBtnBox>
                      </NearPlaceBox>
                    );
                  }
                })} */}
                {/* ------------------------------------------------------------- */}

                <Line />
              </>
            );
          }
          // 선택이 되었을때
          else {
            return (
              <>
                <Title color={"#277bc0"}>AI 추천 관광지</Title>
                <PlaceBox key={index}>
                  <ImgBox>
                    <img src={city}></img>
                  </ImgBox>
                  <PlaceName>{value.name}</PlaceName>
                  <PlaceDetail>{value.detail}</PlaceDetail>
                  <SelectBtnBox>
                    <SelectBtn
                      onClick={() => {
                        isChoice(value);
                      }}
                      back={"#277bc0"}
                      font={"white"}
                    >
                      선택
                    </SelectBtn>
                  </SelectBtnBox>
                </PlaceBox>

                <Title size={"12px"}>주변 관광지</Title>
                {attractionsWithImg[index]?.nearAttraction?.map(
                  (value2, index2) => {
                    console.log(value2,'주변관')
                    let temp = [];
                    // console.log(choiceIndex,'dd')
                    if (choiceIndex) {
                      temp = choiceIndex.map((a) => {
                        return a.name;
                      });
                    }
                    if (temp.indexOf(value2.name) == -1) {
                      return (
                        <>
                          <NearPlaceBox key={index2}>
                            <ImgBox>
                              <img src={city} />
                            </ImgBox>
                            <PlaceName>{value2.name}</PlaceName>
                            <SelectBtnBox>
                              <SelectBtn
                                onClick={() => {
                                  isChoice(value2);
                                }}
                                back={"#edebeb"}
                                font={"#9b9a9a"}
                              >
                                선택
                              </SelectBtn>
                            </SelectBtnBox>
                          </NearPlaceBox>
                        </>
                      );
                    } else {
                      return (
                        <NearPlaceBox key={index2}>
                          <ImgBox>
                            <img src={city} />
                          </ImgBox>
                          <PlaceName>{value2.name}</PlaceName>
                          <SelectBtnBox>
                            <SelectBtn
                              onClick={() => {
                                isChoice(value2);
                              }}
                              back={"#277bc0"}
                              font={"white"}
                            >
                              선택
                            </SelectBtn>
                          </SelectBtnBox>
                        </NearPlaceBox>
                      );
                    }
                  }
                )}

                <Line />
              </>
            );
          }
        })}
      </AddPlaceMidBox>
    </>
  );
};

export default AddPlaceMid;
