import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: calc(100% - 280);
  height: 100%;
  margin-left: 280px;
  padding: 1.5% 5%;

  @media (max-width: 1200px){
    &{
      width: 100%;
      margin-left: 0;
      padding: 0;
    }
  }
`;

export const Main = styled.div`
  background-color: var(--color-bg-tertiary);
  position: relative;
  min-width: 850px;
  height: 520px;
  border-radius: 20px;

  @media (max-width: 900px){
    &{
      height: 100vh;
      width: 100%;
      min-width: 0;
      background-color: ${props => props.theme.colors.background};
    }
  }
`;

export const Header = styled.div`
  height: auto;
  min-width: 850px;

  @media (max-width: 900px){
    &{
      width: 100%;
      min-width: 0;
    }
  }
`;

export const Title = styled.span`
  font-weight: regular;
  display: block;
  font-size: 1.17em;
`;

export const SubTitle = styled.span`
  margin-bottom: 15px;
  font-size: 1.5em;
  display: block;
  font-weight: bold;
`;

export const Hours = styled.div`
  position: relative;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #323541;
  padding-left: 65px;
`;

export const Th = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1.17em;
  font-weight: bold;
`;

export const Weeks = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 470px;
  width: 65px;
  border-right: 1px solid #323541;
  @media (max-width: 900px){
    &{
      height: 100vh;
    }
  }
`;

export const TBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Td = styled.div`
  flex: 1;
  height: 470px;
  width: 65px;
  &:not(:last-child){
    border-right: 1px solid #323541;
  }
  @media (max-width: 900px){
    &{
      height: 100vh;
    }
  }
`;

export const Event = styled.div`
  position: absolute;
  width: calc(70px * 2.5); /*Hour index*/
  height: 40px;
  margin-top: calc(45px * 3); /*week index*/ 
  border-radius: 10px;
  background-color: #E77A15;
  font-size: 1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  cursor: pointer;
  
  &:after {
    content: "";
    width: calc(4.18rem * 9.5);
    border-bottom: 1px solid #323541;
    position: absolute;
    align-self: end;
    bottom: 0;
    right: -2px;
    display: flex;
    }
`;

