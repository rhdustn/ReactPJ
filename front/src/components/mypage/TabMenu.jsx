import React, { useState } from 'react';
import { TabMain,TabButton,TabsContainer,Content } from './mypage.styled';

const TapMenu = () => {
  const [tab, setTab] = useState(0);
  const tabArr = [
    { name: "My Trip", content: "My Trip" },
    { name: "Review", content: "Review" },
    { name: "Comments", content: "Comments" },
    { name: "Alarm", content: "Alarm" }
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