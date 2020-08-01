import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  text:{mensage:'',type:''},
  request:false
}

export const { Types, Creators } = createActions({
  showMensage: ["mensage"],
  initRequest: ['state']
});

const show = (state = INITIAL_STATE, action) => {
    return {...state,text:action.mensage}
};

const init = (state = INITIAL_STATE, action)=>{
  return {...state,request:action.state}
}

export default createReducer(INITIAL_STATE, {
  [Types.SHOW_MENSAGE]: show,
  [Types.INIT_REQUEST]: init
});