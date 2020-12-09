import React from 'react';
import Feed from '../Feed';

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar/>
        </Banner>
            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>
                <h1>Danilo Téo</h1>
                <h2>@teo_danilo</h2>
                <p>
                    Developer at <a href="http://liven.tech">Liven Tech</a>
                </p>
                <ul>
                    <li>
                        <LocationIcon/>
                        São Carlos, SP, Brazil
                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido em 26 de agosto de 1996
                    </li>
                </ul>
                <Followage>
                    <span>
                        seguindo <strong>42</strong>
                    </span>
                    <span>
                        <strong>42 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
            <Feed/>
    </Container>

  )
}

export default ProfilePage;