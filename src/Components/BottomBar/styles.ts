import styled from 'styled-components';

const xsCompact = '900px';

export const Container = styled.div`
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
