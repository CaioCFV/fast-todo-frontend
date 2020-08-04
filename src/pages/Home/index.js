import React, { useEffect, useState } from 'react';
import { FullContainer, FormCreateTask, ContainerTask, TogglerTask } from './style';
import { Task } from '../../api';
import ListTask from '../../components/ListTask';
import InputField from '../../components/InputField';
import { MaxContainer } from '../../util/style-frame';
import { FiPlusCircle } from "react-icons/fi";
import Header from '../../components/Header';
import TaskStatus from '../../components/TaskStatus';



function Home (){

    const [tasks,setTasks] = useState([]);
    const [data, setData] = useState({name:"",done:false, date:new Date()});
    const [toggler, setToggler] = useState(false);

    
    useEffect(()=>{
        async function fetchData(){
            const response = await Task.getTasks();
            setTasks(response.data)
        }
        fetchData();
    },[]);

    const handleInput = (e)=>{
        const objectKey = e.target.name;
        const objectContent = e.target.value;
        const newData = {...data,[objectKey]:objectContent}
        setData(()=>newData)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await Task.create(data);
        if(response){ 
            setTasks(()=>{
                return [...tasks,response.data];
            })
        }
    }

    const handleToggler = () => {
        setToggler(toggler ? false:true)
    }   

    const updateTask = async (item) =>{ 
        let newDone = {};
        const newTasks = tasks.map(it=>{
            if(item._id === it._id){
                newDone = {...it,done:it.done === "false" ? "true":"false"};
                return {...it,done:it.done === "false" ? "true":"false"};
            }else{
                return it;
            }
        });
        console.log(newTasks)
        const response = await Task.update(item._id,{done:newDone.done});
        if(response){
            setTasks(newTasks)
        }
    }

    const deleteTask = async (_id) =>{
        const response = await Task.delete(_id);
        if(response){
            setTasks(()=> {
                return tasks.filter((item)=>item._id !== _id);
            });
        }
    }

    return (
        <FullContainer>
            <Header />
            <MaxContainer>
                <ContainerTask>
                    <TogglerTask aria-dropeffect={toggler}>
                        <button className="btn-showform" onClick={handleToggler}>
                            <FiPlusCircle />
                            CRIAR TASK
                        </button>
                        <FormCreateTask onSubmit={handleSubmit}>
                            <InputField 
                                name="name"
                                id="taskname"
                                type="type"
                                label="Nome da tarefa"
                                value={data.name}
                                onChange={handleInput}
                                required
                                empty={data.name === "" ? true : false}
                            />
                            <button type="submit">salvar</button>
                        </FormCreateTask>
                    </TogglerTask>

                    {tasks.map((item,i)=>{
                        return <ListTask key={i} {...item} updateTask={updateTask} deleteTask={deleteTask}/>
                    })}
                </ContainerTask>
                <TaskStatus data={tasks} />
            </MaxContainer>
        </FullContainer>
    );                 
}

export default Home;
