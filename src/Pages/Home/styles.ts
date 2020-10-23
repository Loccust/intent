import styled from 'styled-components';

const xsCompact = '900px';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Main = styled.div`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 5%;

  @media (max-width: ${xsCompact}){
    &{
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-direction: column;
      padding-bottom: 75px;
    }
  }
`;

export const Progress = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  max-width: 280px;
  height: 500px;
  border-radius: 20px;
  margin: 15px;
  flex: 1;
  @media (max-width: ${xsCompact}){
    &{
      max-width: 100%;
      max-height: 150px;
      width: 90%;
    }
  }
`;

export const Tasks = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  max-width: 650px;
  height: 500px;
  border-radius: 20px;
  margin: 15px;
  flex: 1;
  @media (max-width: ${xsCompact}){
    &{
      max-width: 100%;
      max-height: 320px;
      width: 90%;
    }
  }
`;

export const BottomBar = styled.div`
    display: none;
    @media (max-width: ${xsCompact}){
    &{
      background-color: ${props => props.theme.colors.surface};
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 75px;
      bottom: 0;
      width: 100%;
      position: fixed;
    }

    & > .link{
      cursor: pointer;
      color: ${props => props.theme.colors.text};
      border-radius: 10px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;

      & > .icon{
        font-size: 16pt;
      }

      & > span{
        display: none;
        margin-left: 5px;
        font-size: 13pt;
        font-weight: 400;
      }
    }

    & > .active {
      background: ${props => props.theme.colors.primary};
      padding: 10px 30px;
      color: #fff;
      & > span{
          display: block;
        }
      }
  }
`;


