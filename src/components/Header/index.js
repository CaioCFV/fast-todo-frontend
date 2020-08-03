import React, { useEffect, useState } from 'react';
import { ContainerHeader, Logo, User } from './style';
import { MaxContainer } from '../../util/style-frame';
import { IoIosRocket, IoIosPower } from "react-icons/io";
import { Auth } from '../../api';

function Header() {
    const [nick,setNick] = useState();

    useEffect(()=>{ 
        async  function fetchUser(){
            const response = await Auth.getUserInfo();
            if(response){
                setNick(response.data.nickname)
            }
        }
        fetchUser();
    },[nick]);

    const logoutUser = () =>{
        Auth.logout();
    }

     return (
        <ContainerHeader>
            <MaxContainer>
                <User>
                    Olá {nick}!
                </User>
                <Logo>
                    <IoIosRocket className="logo-icon" />
                    FastTodo
                    <span>by: Caio F. Vieira</span>
                </Logo>
                <button className="logout" onClick={logoutUser}>
                    <IoIosPower />
                </button>
            </MaxContainer> 
        </ContainerHeader>
    );
}

export default Header;