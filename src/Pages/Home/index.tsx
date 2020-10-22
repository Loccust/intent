import React from 'react';
import { Wrapper, Progress, Tasks, Main }  from './styles';
import SideMenu from '../../Components/SideMenu';

interface Props{
    toggleTheme():void;
}

const Home: React.FC<Props> = ( { toggleTheme } ) => {
    return(
        <Wrapper>
            <SideMenu toggleTheme={toggleTheme}/>
            <Main>
                <Progress>
                </Progress>
                <Tasks>
                </Tasks>
            </Main>
        </Wrapper>
    );
}

export default Home;