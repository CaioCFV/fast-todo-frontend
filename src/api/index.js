import axios from 'axios';
import store from '../store';
import { Creators } from '../store/ducks/modal';

const TOKEN_NAME = 'Authorization';

const setToken = (token ) => {
    return localStorage.setItem(TOKEN_NAME,token.data.access_token);
}

const getToken = () => {
    return localStorage.getItem(TOKEN_NAME);
}

const blockUser = () => {
    localStorage.removeItem(TOKEN_NAME);
    return window.location.href = "/signin";
}

const mensageError = (mensage =  "Erro") => {
    return store.dispatch(Creators.showMensage({mensage:mensage,type:0}));
}

const mensageSucess = (mensage = "Alerta") => {
    return store.dispatch(Creators.showMensage({mensage:mensage,type:1}));
}

const mensageWarning = (mensage = "Sucesso") => {
    return store.dispatch(Creators.showMensage({mensage:mensage,type:2}));
}

const initRequest = () => {
    return store.dispatch(Creators.initRequest(true));
}

const validateResponse = (response) => {
    switch (response.data.statusCode){
        case 401:
            blockUser();
            return false;
        case 409:
            mensageError(response.data.message);
            return false;
        case 400:
            mensageError(response.data.message);
            return false;
        case 404:
            mensageError(response.data.message);
            return false;
        default: 
            return response;
    }
}

const api = axios.create({
    baseURL: "https://fast-todo-backend.herokuapp.com",
    validateStatus:()=>true,
    headers:{
        "Authorization": "Bearer " + getToken()
    }
})

class Authenticate{

    async getUserInfo(){
        const response = await api.get('/auth/userinfo');
        if(validateResponse(response)){
           return response;
        }
    }
    async login(data){
        initRequest();
        const response = await api.post('/auth/signin',data);
        if(validateResponse(response)){
            setToken(response);
            return window.location = '/';
        }
    }

    logout (){
        blockUser();
    }

    async createNewUserAcess(data){
        initRequest();
        const response = await api.post('/auth/signup',data);
        if(validateResponse(response)){
            mensageSucess('Usuário cadastrado! Vá para a tela de login e acesse a plataforma.');
            return true;
        }    
    }

    validateUser(){
        const token = getToken();
        if(!token){
            return false;
        }
        return true;
    }

}

class UserTasks{

    async getTasks(){
        const response = await api.get('/tasks')
        return validateResponse(response)
    }

    async create(data){
        initRequest();
        const response = await api.post('/tasks',data);
        if(validateResponse(response)){
            mensageSucess('Tarefa criada com sucesso');
            return response;
        }
    }

    async update(id,data){
        initRequest();
        const response = await api.patch(`/tasks/${id}`,data);
        if(validateResponse(response)){
            mensageSucess('Tarefa atualizada');
            return response;
        }
    }

    async delete(id){
        initRequest();
        const response = await api.delete(`/tasks/${id}`);
        if(validateResponse(response)){
            mensageWarning('Tarefa deletada');
            return response;
        }
    }

}

export const Auth = new Authenticate();
export const Task = new UserTasks();