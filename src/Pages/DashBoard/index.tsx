import React from 'react';
import { Wrapper, SideMenu, Container, Activities, Header, Title, SubTitle, Hours, Th, Weeks, TBody, Td, Event  } from './styles';

function DashBoard(){
  let cols = []
    for(let i=0; i<=12; i++){
      cols.push(<Th>{i}</Th>)
    }
  return(
      <Wrapper>
        <SideMenu/>
        <Container>
          <Header>
            <Title> Hi User, </Title>
            <SubTitle> Your Activities </SubTitle>
          </Header>
          <Activities>
            <Hours>
              { cols }
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
          </Activities>
        </Container>
      </Wrapper>
  );
}

export default DashBoard;