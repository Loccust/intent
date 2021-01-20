import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import {FiHome, FiCalendar, FiLogOut, FiDollarSign } from 'react-icons/fi'

const mdCompact = '1200px';
const xsCompact = '900px';

const size = css`
  width: 320px;
  @media (max-width: ${mdCompact} ){
    &{
      width: 70px;
    }
  }
  @media (max-width: ${xsCompact}){
    &{
      display: none;
    }
  }
`;

export const Page = styled.div`
  border: 2px solid ${props => props.theme.colors.menu};
  color: ${props => props.theme.colors.text};
  padding: 10px;
  padding-left: 35%;
  margin: 10px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 12pt;
  cursor: pointer;

  &:hover{
    border: 2px solid ${props => props.theme.colors.primary};
  }

  @media (max-width: ${mdCompact}){
    &{
      padding-left: 0;
      text-align: center;
    }
    & > span{
      display: none;
    }
  }
`;

export const Header = styled.div`
  padding: 20px;
  margin: 10px;
  text-align: center;
  font-size: 20pt;
  font-weight: 700;
  color: ${props => props.theme.colors.text};

  > span{
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${mdCompact}){
    &{
      padding: 10px;
      margin: 10px;
    }
    & > span{
      display: none;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  &.active > ${Page} {
    background: ${props => props.theme.colors.primary};
  }

  &.active > ${Page} > * {
    color: #fff;
  }

  &.end > ${Page} {  }
`;

export const Container = styled.div`
  ${size};
  background-color: ${props => props.theme.colors.menu};
  border-right: 1px solid ${props => props.theme.colors.border};
  display: block;
  height: 100%;
  left: 0px;
  top: 0px;
`;

const icon = css`
  margin-top: 1px;
  position: absolute;
  margin-left: -35px;
  @media (max-width: ${mdCompact}){
    &{
      position: relative;
      margin-left: 0;
      left: 5px;
    }
  }
`;

export const HomeIcon = styled(FiHome)`
  ${icon}
`;

export const ActivitiesIcon = styled(FiCalendar)`
  ${icon}
`;

export const LogOutIcon = styled(FiLogOut)`
  ${icon}
`;

export const FinancesIcon = styled(FiDollarSign)`
  ${icon}
`;

