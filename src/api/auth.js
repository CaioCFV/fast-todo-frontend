import axios from 'axios';
import store from '../store';
import { Creators } from '../store/ducks/modal';

const api = axios.create({
    baseURL: "https://fast-todo-backend.herokuapp.com"
})

const TOKEN_NAME = 'Authorization';

class Utils {
    static setToken(token){
        return localStorage.setItem(TOKEN_NAME,token.data.access_token);
    }

    static getToken(){
        return localStorage.getItem(TOKEN_NAME);
    }

    static clearToken(){
        return localStorage.removeItem(TOKEN_NAME);
    }

    static mensageError(mensage =  "Erro"){
        return store.dispatch(Creators.showMensage({mensage:mensage,type:0}));
    }

    static mensageSucess(mensage = "Alerta"){
        return store.dispatch(Creators.showMensage({mensage:mensage,type:1}));
    }

    static mensageWarning(mensage = "Sucesso"){
        return store.dispatch(Creators.showMensage({mensage:mensage,type:2}));
    }

    static initRequest(){
        return store.dispatch(Creators.initRequest(true));
    }
}

class Auth extends Utils{

    async login(data){
        Auth.initRequest();
        const response = await api.post('/auth/signin',data).catch(function(err){});
        if(!response){
            Auth.clearToken();
            Auth.mensageError('Usuário ou senha inválidos');
            return false;
        }
        Auth.setToken(response);
        return window.location = '/';
    }

    async createNewUserAcess(data){
        Auth.initRequest();
        const response = await api.post('/auth/signup',data).catch(function(err){});
        if(!response){
            Auth.clearToken();
            Auth.mensageError('Já existe um usuário com este nome');
            return false;
        }
        Auth.mensageSucess('Usuário cadastrado! Vá para a tela de login e acesse a plataforma.');
        return true;
    }

    validateUser(){
        const token = Auth.getToken();
        if(!token){
            return false;
        }
        return true;
    }
    
}


export default new Auth();