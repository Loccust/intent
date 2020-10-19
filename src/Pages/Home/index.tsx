import React from 'react';
import { Wrapper, Progress, Tasks, Main }  from './styles';
import SideMenu from '../../Components/SideMenu';

function Home(){
    return(
        <Wrapper>
            <SideMenu/>
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