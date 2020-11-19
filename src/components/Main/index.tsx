import React from 'react';

import { Container, Header, BackIcon, ProfileInfo,BottomMenu,
    HomeIcon,
    SearchIcon,
    BellIcon,
    EmailIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>s
        <Header>
            <button>
                <BackIcon/>
            </button>
            <ProfileInfo>
                <strong>Danilo Téo</strong>
                <span>42 Tweets</span>
            </ProfileInfo>
        </Header>
        {/* <ProfilePage/> */}
        <BottomMenu>
            <HomeIcon className="active"/>
            <SearchIcon/>
            <BellIcon/>
            <EmailIcon/>
        </BottomMenu>
    </Container>

  )
}

export default Main;