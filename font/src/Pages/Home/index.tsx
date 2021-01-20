import React, {useState} from 'react';
import { Wrapper, Progress, Category, Tasks, Task, Main }  from './styles';
import SideMenu from '../../Components/SideMenu';
import BottomBar from '../../Components/BottomBar';

interface Props{
    toggleTheme():void;
}
interface IitemTask{
    name: string;
    categoryId: number;
}

interface ICategory{
    id: number;
    name: string;
    color: string;
}

const Home: React.FC<Props> = ( { toggleTheme } ) => {
    const [checked, setChecked] = useState(false);
    function check(){
        setChecked(checked ? false : true);
    }
    const CategoryContainer: Array<Object> = [];
    const CategoryList: ICategory[] = [
        {
            id: 0, 
            name: 'English',
            color: '#000'
        },
        { 
            id: 1,
            name: 'Programming',
            color: '#CCC'
        },
    ];

    CategoryList.forEach(itemCategory => {
        CategoryContainer.push(
        <Category>
            <span className="mark" style={{ backgroundColor: itemCategory.color }}></span>
            <span className="itemCategory">
                { itemCategory.name }
            </span>
        </Category>);
    });

    const TasksContainer: Array<Object> = [];
    const TaskList: IitemTask[] = [
        { 
            name: 'study',
            categoryId: 0
        },
        { 
            name: 'workout',
            categoryId: 0
        },
    ];
    let categoryItem: ICategory;

    TaskList.forEach(taskItem =>{
        categoryItem = CategoryList.find((category:ICategory)=> category.id === taskItem.categoryId) 
        ?? {
            id: 0, 
            name: 'no one category',
            color: '#ccc'
        };
        TasksContainer.push(
        <Task>
            {/* <input type="checkbox"/> */}
            <span className="styledCheckBox" onClick={check}
            style={{ border: "2px solid " + categoryItem.color,
                     background: checked ? "salmon" : "papayawhip" }}>
            </span>
            <span className="itemTask">{ taskItem.name }</span>
        </Task>);
    });

    return(
        <Wrapper>
            <SideMenu toggleTheme={toggleTheme}/>
            <Main>
                <Progress>
                    <div className="title">
                        <h3> Progress </h3>
                    </div>
                    { CategoryContainer }
                </Progress>
                <Tasks>
                    <div className="title">
                        <h3> Tasks </h3>
                    </div>
                    <input type="text" placeholder="Insert a new task" className="newTask"/>
                    { TasksContainer }
                </Tasks>
            </Main>
            <BottomBar/>
        </Wrapper>
    );
}

export default Home;