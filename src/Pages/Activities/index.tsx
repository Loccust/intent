import React from 'react';
import SideMenu from '../../Components/SideMenu';
import { Wrapper, Container, Main, Header, Title, SubTitle, Hours, Th, Weeks, TBody, Td, Event  } from './styles';

function Activities(){
  return(
      <Wrapper>
        <SideMenu/>
        <Container>
          <Header>
            <Title> Hi User, </Title>
            <SubTitle> Your Activities </SubTitle>
          </Header>
          <Main>
            <Hours>
              <Th>01</Th>
              <Th>02</Th>
              <Th>03</Th>
              <Th>04</Th>
              <Th>05</Th>
              <Th>06</Th>
              <Th>07</Th>
              <Th>08</Th>
              <Th>09</Th>
              <Th>10</Th>
              <Th>11</Th>
              <Th>12</Th>
            </Hours>
            <TBody>
            <Weeks>
              <Th>Sn</Th>
              <Th>Mn</Th>
              <Th>Tu</Th>
              <Th>We</Th>
              <Th>Th</Th>
              <Th>Fr</Th>
              <Th>Sa</Th>
            </Weeks>
              <Td/>
              <Td/>
              <Td/>
              <Td/>
              <Td/>
              <Td/>
              <Td/>
              <Td>
                <Event>Blues scale</Event>  
              </Td>
              <Td/>
              <Td/>
              <Td/>
              <Td/>
            </TBody>
          </Main>
        </Container>
      </Wrapper>
  );
}

export default Activities;