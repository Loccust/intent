import React from 'react';
import { Container, Header, Page, StyledLink, HomeIcon, ActivitiesIcon, FinancesIcon, LogOutIcon } from './styles';

function SideMenu(){
  return(
    <Container>
      <Header><span>Intent</span>.io</Header>
        <StyledLink to='/' exact>
          <Page> <HomeIcon/><span>Home</span></Page>
        </StyledLink>
        <StyledLink to='/activities'>
          <Page> <ActivitiesIcon/> <span>Activities </span></Page>
        </StyledLink>
        <StyledLink to='/finances'>
          <Page> <FinancesIcon/> <span>Finances </span></Page>
        </StyledLink>
        <StyledLink to='/logout'>
          <Page> <LogOutIcon/> <span>Logout </span> </Page>
        </StyledLink>
    </Container>
  );
}

export default SideMenu;