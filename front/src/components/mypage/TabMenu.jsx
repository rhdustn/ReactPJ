import React, { useState } from 'react';
import styled from "styled-components";

const TabMain = styled.div`
  position: absolute;
  top: 40%;
`;

const TabsContainer = styled.div`
  display: flex;
`;

const TabButton = styled.button`
  width: 100px;
  background-color: ${(props) => (props.active ? 'white' : 'white')};
  color: #676767;
  padding: 10px 20px;
  border: none;
  border-bottom: 2px solid ${(props) => (props.active ? '#5da0ff' : 'white')};
  cursor: pointer;
`;

const Content = styled.div`
  background-color: #f5f5f5;
  height: 400px;
  border-radius: 0 0 5px 5px;
`;

const TapMenu = () => {
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

export default TapMenu;