import React, { useEffect, useState } from 'react';
import { FullContainer, FormCreateTask, ContainerTask, TogglerTask } from './style';
import { Task } from '../../api';
import ListTask from '../../components/ListTask';
import InputField from '../../components/InputField';
import { MaxContainer } from '../../util/style-frame';
import { FiPlusCircle } from "react-icons/fi";
import Header from '../../components/Header';

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
                        return <ListTask key={i} {...item} />
                    })}
                </ContainerTask>
            </MaxContainer>
        </FullContainer>
    );                 
}

export default Home;
