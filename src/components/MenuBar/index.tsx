import React from 'react';

import Button from '../Button'

import { 
    Container,
    Topside,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Logo,
    BotSide,
    Avatar,
    ProfileData,
    ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo/>
              <MenuButton>
                    <HomeIcon/>
                    <span>Página Inicial</span>
                </MenuButton>    
                <MenuButton>
                    <BellIcon/>
                    <span>Notificações</span>
                </MenuButton>
                <MenuButton>
                    <EmailIcon/>
                    <span>Mensagens</span>
                </MenuButton>
                <MenuButton>
                    <FavoriteIcon/>
                    <span>Favoritados</span>
                </MenuButton>
                <MenuButton className="active">
                    <ProfileIcon/>
                    <span>Perfil</span>
                </MenuButton>
                <Button>
                    <span>Tweetar</span>
                </Button>
          </Topside>

          <BotSide>
              <Avatar/>
              <ProfileData>
                  <strong>Danilo Téo</strong>
                  <span>@teo_danilo</span>
              </ProfileData>
              <ExitIcon/>
          </BotSide>
      </Container>
  );
}

export default MenuBar;