import React from 'react';
import { Wrapper, Progress, Tasks, Main }  from './styles';
import SideMenu from '../../Components/SideMenu';
import BottomBar from '../../Components/BottomBar';

interface Props{
    toggleTheme():void;
}

const Home: React.FC<Props> = ( { toggleTheme } ) => {
    return(
        <Wrapper>
            <SideMenu toggleTheme={toggleTheme}/>
            <Main>
                <Progress>
                    <h3> Progress </h3>
                </Progress>
                <Tasks>
                    <h3> Tasks </h3>
                </Tasks>
            </Main>
            <BottomBar/>
        </Wrapper>
    );
}

export default Home;