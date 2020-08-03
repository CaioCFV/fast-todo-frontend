import React, { useState } from 'react';
import InputField from '../../components/InputField';
import { FullContainer, FormContainer, PageDescription, Logo, Button, Cadastro, Footer  } from './style.js';
import { IoIosRocket } from "react-icons/io";
import { MaxContainer } from '../../util/style-frame';
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { Auth } from '../../api';
import { Link } from 'react-router-dom';

function Signin (){
    const [data,setData] = useState({username:"",password:""});

    const handleInput = (e)=>{
        const objectKey = e.target.name;
        const objectContent = e.target.value;
        const newData = {...data,[objectKey]:objectContent}
        setData(()=>newData)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        Auth.login(data);
    }

    return (
        <FullContainer>
            <div className="gap"></div>

            <Logo>
                <IoIosRocket className="logo-icon" />
                FastTodo
                <span>by: Caio F. Vieira</span>
            </Logo>

            <PageDescription>Login / Cadastro</PageDescription>

            <FormContainer onSubmit={handleSubmit}>
                <InputField 
                    id="username" 
                    label="Usuário" 
                    type="text"
                    name="username"
                    required={true} 
                    value={data.username} 
                    onChange={handleInput}
                    empty={data.username === "" ? true : false}
                />

                <InputField 
                    id="password" 
                    label="Senha"
                    name="password"
                    type="password" 
                    required={true} 
                    value={data.password} 
                    onChange={handleInput}
                    empty={data.password === "" ? true : false}
                />

                <Button type="submit">acessar plataforma</Button>
            </FormContainer>

            <Cadastro>
                <h3 className="title">
                    Ainda não é cadastrado?
                    <Link to="/signup"> Clique aqui, é muito simples!</Link>
                </h3>
            </Cadastro>
    
            <Footer>    
                <MaxContainer>
                    <a href="https://www.linkedin.com/in/caiofvieira" target="_blank"  rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/caiocfv" target="_blank"  rel="noopener noreferrer">
                        <FaGithubSquare />
                    </a>
                    <a href="https://www.instagram.com/caiiuh/" target="_blank"  rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </MaxContainer>
            </Footer>
        </FullContainer>
    );                 
}

export default Signin;
