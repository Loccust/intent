import React, {useContext} from 'react';
import { Container, Header, Page, StyledLink, HomeIcon, ActivitiesIcon, FinancesIcon, LogOutIcon } from './styles';
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components';

interface Props{
  toggleTheme():void;
}

const SideMenu: React.FC<Props> = ( { toggleTheme } ) => {
  const { colors, title } = useContext(ThemeContext)
  return(
    <Container>
      <Header><span>Intent</span>.io
        <Switch 
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={30}
          handleDiameter={20}
          onColor={colors.primary}
        />
      </Header>
        <StyledLink to='/' exact>
          <Page> <HomeIcon/><span>Home</span></Page>
        </StyledLink>
        <StyledLink to='/activities'>
          <Page> <ActivitiesIcon/> <span>Activities </span></Page>
        </StyledLink>
        <StyledLink to='/finances'>
          <Page> <FinancesIcon/> <span>Finances </span></Page>
        </StyledLink>
        <StyledLink to='/logout' className='end'>
          <Page> <LogOutIcon/> <span>Logout </span> </Page>
        </StyledLink>
    </Container>
  );
}

export default SideMenu;