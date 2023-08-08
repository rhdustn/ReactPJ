import React, { useState } from 'react';
import styled from "styled-components";
import {TabMain,TabsContainer,TabButton,Content  } from "./MyPagePc.styled";


const TapMenuPc = () => {
  const [tab, setTab] = useState(0);
  const tabArr = [
    { name: "My Trip", content: "content1" },
    { name: "Review", content: "content2" },
    { name: "Comments", content: "content3" },
    { name: "Alarm", content: "content4" }
  ];

  const selectMenuHandler = (index) => {
    setTab(index);
  };

  return (
    <div>
      <TabMain>
        <TabsContainer>
          {tabArr.map((tabItem, index) => (
            <TabButton
              key={index}
              onClick={() => selectMenuHandler(index)}
              active={index === tab}
            >
              {tabItem.name}
            </TabButton>
          ))}
        </TabsContainer>
        <Content>{tabArr[tab].content}</Content>
      </TabMain>
    </div>
  );
}

export default TapMenuPc;