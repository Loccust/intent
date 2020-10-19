import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import {FiHome, FiCalendar, FiLogOut, FiDollarSign } from 'react-icons/fi'

const mdCompact = '1200px';
const xsCompact = '900px';

const size = css`
  width: 360px;
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
  padding: 10px;
  padding-left: 35%;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid var(--color-bg-tertiary);
  font-weight: 600;
  font-size: 12pt;
  cursor: pointer;

  &:hover{
    background-color: var(--color-bg-secundary);
    border: 2px solid var(--color-primary);
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

  > span{
    color: var(--color-primary);
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
    background: var(--color-primary);
  }

  &.end > ${Page} {  }
`;

export const Container = styled.div`
  ${size};
  background-color: var(--color-bg-tertiary);
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

