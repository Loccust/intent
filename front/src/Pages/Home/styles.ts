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

export const Category = styled.div`
  justify-content: flex-start;
  background-color: #2c2f3d;
  align-items: center;
  font-size: 0.9rem;
  height: 42.5px;
  display: flex;
  margin: 5px 0;
  width: 100%;

  & > span.mark {
    width: 5px;
    height: 42.5px;
    position: absolute;
  }

  & > span.itemCategory {
    margin: 0 15px;
  }

`;

export const Progress = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 5px;
  max-width: 300px;
  padding: 7.5px;
  height: 550px;
  margin: 15px;
  flex: 1;

  & > div.title{
    text-align: center;
    padding: 5px 0;
  }

  @media (max-width: ${xsCompact}){
    &{
      max-width: 100%;
      max-height: 150px;
      width: 90%;
    }
  }
`;

export const Task = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.border};
  justify-content: flex-start;
  align-items: center;
  display: flex;
  width: 100%;
  height: 42.5px;

  & > span.itemTask{
    margin-left: 10px;
    font-weight: normal;
  }

  /* & > input{
    opacity: 0;
    z-index: 2;
    zoom: 1.75;
    position: absolute;
    cursor: pointer;
  }; */

  & > span.styledCheckBox{
    height: 20px;
    width: 20px;
    margin-top: -2.5px;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.surface};
    border: 2px solid ${props => props.theme.colors.primary};
    cursor: pointer;
  }


  & > span.styledCheckBox:disabled{
    cursor: text;
  }

  & > span.styledCheckBox:after{
    content: "";
    position: absolute;
    height: 8px;
    width: 5px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
	  margin: 1px 4px;
    transition: all 0.25s ease;
  }

  & > input:checked + span.styledCheckBox{
    background: ${props => props.theme.colors.primary};
  };

  & > input:checked + span.styledCheckBox:after {
    border: solid white;
    border-width: 0 3px 3px 0;
  }

`;

export const Tasks = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  max-width: 700px;
  height: 550px;
  border-radius: 5px;
  padding: 15px 25px;
  margin: 15px;
  flex: 1;

  & > div.title{
    padding: 5px 0;
  }

  & > input.newTask{
    background-color: ${props => props.theme.colors.border};
    border: 1px solid ${props => props.theme.colors.border};  ;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin: 10px -2.5px;
    color: ${props => props.theme.colors.text};
  };

  & > input.newTask:focus{
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary};
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


