import React from 'react';
import SideMenu from '../../Components/SideMenu';
import { Wrapper, Container, Main, Header, Title, SubTitle, Hours, Th, Weeks, TBody, Td, Event  } from './styles';

interface Props{
  toggleTheme():void;
}

const Activities: React.FC<Props> = ({ toggleTheme }) => {
  let Ths = []
    for(let i=0; i<=12; i++){
      Ths.push(<Th>{i}</Th>);
    }
  return(
      <Wrapper>
        <SideMenu toggleTheme={toggleTheme}/>
        <Container>
          <Header>
            <Title> Hi User, </Title>
            <SubTitle> Your Activities </SubTitle>
          </Header>
          <Main>
            <Hours>
              {Ths}
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