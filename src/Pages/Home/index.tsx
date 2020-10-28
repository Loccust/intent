import React from 'react';
import { Wrapper, Progress, Tasks, Task, Main }  from './styles';
import SideMenu from '../../Components/SideMenu';
import BottomBar from '../../Components/BottomBar';

interface Props{
    toggleTheme():void;
}

const Home: React.FC<Props> = ( { toggleTheme } ) => {
    const TaskList = [];
    for(var i = 0; i < 4; i++)
        TaskList.push(<Task> <input type="checkbox"/> <span>item task</span> </Task>);
    return(
        <Wrapper>
            <SideMenu toggleTheme={toggleTheme}/>
            <Main>
                <Progress>
                    <h3> Progress </h3>
                </Progress>
                <Tasks>
                    <h3> Tasks </h3>
                    <input type="text" placeholder="+ Add Task" className="newTask"/>
                    { TaskList }
                </Tasks>
            </Main>
            <BottomBar/>
        </Wrapper>
    );
}

export default Home;