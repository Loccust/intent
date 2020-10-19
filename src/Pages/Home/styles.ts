import styled from 'styled-components';

const mdCompact = '1200px';
const xsCompact = '900px';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Main = styled.div`
  background-color: var(--color-bg-primary);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  @media (max-width: ${xsCompact}){
    &{
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-direction: column;
    }
  }
`;

export const Progress = styled.div`
  background-color: var(--color-bg-secundary);
  width: 300px;
  height: 500px;
  border-radius: 20px;
  margin: 20px;
  @media (max-width: ${xsCompact}){
    &{
      width: 90%;
      height: 25%;
    }
  }
`;

export const Tasks = styled.div`
  background-color: var(--color-bg-secundary);
  width: 700px;
  height: 500px;
  border-radius: 20px;
  margin: 20px;
  @media (max-width: ${xsCompact}){
    &{
      width: 90%;
      height: 50%;
      margin-top: 0;
    }
  }
`;
