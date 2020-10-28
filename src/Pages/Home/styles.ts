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
  color: ${props => props.theme.colors.text};
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
  padding: 25px 35px;
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

export const Task = styled.div`
  border-bottom: 1px solid #323541;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  width: 100%;
  height: 42.5px;
`;

export const Tasks = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  max-width: 650px;
  height: 500px;
  border-radius: 20px;
  padding: 25px 30px;
  margin: 15px;
  flex: 1;

  & > h1{
    margin: 0 5px;
  };

  & > input.newTask{
    background-color: #2C2F3D;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0;
    color: ${props => props.theme.colors.text};
  };

  & > input.newTask::placeholder{
    color: #404559;
  };

  @media (max-width: ${xsCompact}){
    &{
      max-width: 100%;
      max-height: 320px;
      width: 90%;
      padding: 20px;
    }
  }
`;


