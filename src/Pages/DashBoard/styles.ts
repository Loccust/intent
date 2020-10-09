import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SideMenu = styled.div`
  background-color: var(--color-bg-tertiary);
  position: fixed;
  display: block;
  width: 280px;
  height: 100%;
  left: 0px;
  top: 0px;

  @media (max-width: 1200px){
        &{
          display: none;
        }
    }
`;

export const Container = styled.div`
  background-color: var(--color-bg-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: calc(100% - 280);
  height: 100%;
  margin-left: 280px;
  padding: 3% 5%;

  @media (max-width: 1200px){
    &{
      width: 100%;
      margin-left: 0;
      padding: 0;
    }
  }

  @media (min-width: 1400px){
    &{
      display: inline;
    }
  }    
`;

export const Activities = styled.div`
  background-color: var(--color-bg-tertiary);
  position: relative;
  min-width: 850px;
  height: 520px;
  border-radius: 20px;

  @media (max-width: 900px){
    &{
      height: 100%;
      width: 100%;
      background-color: var(--color-bg-primary);
      min-width: 0;
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
      height: 75px;
      padding: 3% 5%;
      background-color: var(--color-bg-tertiary);
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

  @media (max-width: 900px){
    &{
      background-color: var(--color-bg-tertiary);
      padding-left: 35px;
    }
  }  
`;

export const Th = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1.17em;
  font-weight: bold;
  @media (max-width: 900px){
    &{
      font-size: 0.8em;
      font-weight: medium;
    }
  }   
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
      background-color: var(--color-bg-tertiary);
      height: calc(100vh - 125px);
      min-height: 500px;
      width: 35px;
    }
  }   
`;

export const TBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  align-items: start;

  @media (max-width: 900px){
    &{
      height: calc(100vh - 125px);
    }
  } 
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
      height: calc(100vh - 125px);
      width: 35px;
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

  &:after {
    content: "";
    width: calc(70px * 9.5);
    border-bottom: 1px solid #323541;
    position: absolute;
    align-self: end;
    bottom: 0;
    right: -2px;
    display: flex;
    }

  @media (max-width: 900px){
    &{
      width: calc(10% * 2.5);
      font-size: 0.8rem;
    }
  }    
`;

