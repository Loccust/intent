import React from 'react';
import { Wrapper, Progress, Category, Tasks, Task, Main }  from './styles';
import SideMenu from '../../Components/SideMenu';
import BottomBar from '../../Components/BottomBar';

interface Props{
    toggleTheme():void;
}
interface IitemTask{
    name: string;
    category: string;
}

interface ICategory{
    name: string;
    color: string;
}

const Home: React.FC<Props> = ( { toggleTheme } ) => {
    const TasksContainer = [];
    const TaskList: IitemTask[] = [
        { 
            name: 'study',
            category: 'english'
        },
        { 
            name: 'workout',
            category: 'english'
        },
    ];
    for(var i = 0; i < TaskList.length; i++){
        TasksContainer.push(<Task>
            <input type="checkbox"/>
            <span className="styledCheckBox"></span>
            <span className="itemTask">{ TaskList[i].name }</span>
        </Task>);
    }

    const CategoryContainer = [];
    const CategoryList: ICategory[] = [
        { 
            name: 'English',
            color: '#000'
        },
        { 
            name: 'Programming',
            color: '#000'
        },
    ];

    for(i = 0; i < CategoryList.length; i++){
        CategoryContainer.push(<Category>
            <span className="graph"></span>
            <span className="itemCategory">{ CategoryList[i].name }</span>
        </Category>);
    }
    
    return(
        <Wrapper>
            <SideMenu toggleTheme={toggleTheme}/>
            <Main>
                <Progress>
                    <h3> Progress </h3>
                    { CategoryContainer }
                </Progress>
                <Tasks>
                    <h3> Tasks </h3>
                    <input type="text" placeholder="+ New Task" className="newTask"/>
                    { TasksContainer }
                </Tasks>
            </Main>
            <BottomBar/>
        </Wrapper>
    );
}

export default Home;