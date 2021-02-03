import React from 'react';

import { 
  Container,
  Retweeted,
  RetweetIconHeader,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  Dot,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    // commetn
    <Container>
      <Retweeted>
        <RetweetIconHeader/>
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar/>
        <Content>
          <Header>
            <strong>Danilo Téo</strong>
            <span>@teo_danilo</span>
            <Dot/>
            <time>26 de ago</time>
          </Header>
          <Description>Life, the universe and everything else</Description>
          <ImageContent/>
          <Icons>
            <Status>
              <CommentIcon/>
              42
            </Status>
            <Status>
              <RetweetIcon/>
              42
            </Status>
            <Status>
              <LikeIcon/>
              42
            </Status>

          </Icons>
        </Content>
      </Body>
    </Container>

  );
}

export default Tweet;