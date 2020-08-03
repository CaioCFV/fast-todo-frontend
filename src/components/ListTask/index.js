import React, { useState } from 'react';
import formatedDate from '../../util/formatedDate';
import { TaskItem, TaskName, TaskContainerUpdate, TaskStatus, TaskControls } from './style';
import { FiEdit } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsFillXCircleFill } from "react-icons/bs";
import { Task } from '../../api';

function ListTask ({name, done, date, _id}){

    const [data,setData] = useState({name:name,done:done});
    const [update, setUpdate] = useState(false);
    const [display,setDisplay] = useState('flex');
    const [showName, setName] = useState(name);

    const handleInput = (e)=>{
        const objectKey = e.target.name;
        const objectContent = e.target.value;
        const newData = {...data,[objectKey]:objectContent}
        setData(()=>newData);
    }

    const handleUpdate = () => {
        setUpdate(()=>update === false ? true:false);
    }

    const updateTask = async () =>{
        const newDone = {done:data.done === 'true' ? 'false':'true'};
        const response = await Task.update(_id,newDone);
        if(response){
            setData(()=>{
                return {...data,done:newDone.done};
            });
        }
    }

    const updateName = async () =>{
        const response = await Task.update(_id,{name:data.name});
        if(response){
            setName(data.name);
            handleUpdate();
        }
    }

    const deleteTask = async () =>{
        const response = await Task.delete(_id);
        if(response){
            setDisplay(()=>{
                return "none";
            });
        }
    }

    return (
        <>
            <TaskItem style={{display:display}}>
                <TaskName>
                    <TaskContainerUpdate aria-controls={update}>
                        <textarea name="name" id="taskname" onChange={handleInput} value={data.name}>{data.name}</textarea>
                        <button className="save" onClick={updateName}>Salvar</button>
                        <button className="cancel" onClick={handleUpdate}>Cancelar</button>
                    </TaskContainerUpdate>
                    <p>{showName}</p>
                    <span className="date">Criado em: {formatedDate(date)}</span>
                </TaskName>
                <TaskStatus className="status" aria-controls={data.done}>
                    <p>status</p>
                    <span></span>
                </TaskStatus>
                <TaskControls className="controls" aria-controls={data.done}>
                    <button className="container-texto" onClick={handleUpdate}>
                        <FiEdit className="edit"/>
                        <span>editar</span>
                    </button>
                    <button className="container-texto" onClick={deleteTask}>
                        <BsFillXCircleFill className="delete"/>
                        <span>excluir</span>
                    </button>
                    <button className="container-texto concluir" onClick={updateTask} >
                        <IoIosCheckmarkCircle className="ok"/>
                        <span>concluir</span>
                    </button>
                    <button className="container-texto reabrir" onClick={updateTask} >
                        <IoIosCheckmarkCircle className="ok" />
                        <span>reabrir</span>
                    </button>
                </TaskControls>
            </TaskItem>
        </>
    );                 
}

export default ListTask;