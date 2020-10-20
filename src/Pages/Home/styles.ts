import styled from 'styled-components';

// const mdCompact = '1200px';
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
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 10px;

  @media (max-width: ${xsCompact}){
    &{
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-direction: column;
    }
  }
`;

export const Progress = styled.div`
  background-color: ${props => props.theme.colors.surface};
  /*
  min-width: 300px;
  width: 25%;
  min-height: 500px;
  height: 75%; */
  height: 500px;
  border-radius: 20px;
  margin: 15px;
  @media (max-width: ${xsCompact}){
    &{
      width: 90%;
      height: 150px;
      min-width: 0;
      min-height: 0;
    }
  }
`;

export const Tasks = styled.div`
  /* 
  min-width: 465px;
  width: 65%;
  min-height: 500px;
  height: 75%; */
  background-color: ${props => props.theme.colors.surface};
  height: 500px;
  border-radius: 20px;
  margin: 15px;
  @media (max-width: ${xsCompact}){
    &{
      width: 90%;
      height: 320px;
      margin-top: 0;
      min-width: 0;
      min-height: 0;
    }
  }
`;
