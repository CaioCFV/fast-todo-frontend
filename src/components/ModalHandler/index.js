import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../../store/ducks/modal';
import { ModalContainer, Loading} from './style.js';
import { MdError, MdWarning, MdCheckCircle } from "react-icons/md";
import gif from './loading.gif';

function ModalHandler({mensage,request,initRequest}){
    
    /*
    * TYPE 1 = ERROR
    * TYPE 2 = SUCESS
    * TYPE 3 = WARNING
    * TYPES VIA REDUX DISPATCH
    */
    
    const [disabled,setDisabled] = useState(true);
   
    useEffect(()=>{
        initRequest(false);
        setDisabled(false);
        setTimeout(()=>{
            setDisabled(true);
        },5000);
    },[mensage,initRequest]);

    return (
        <>
        <ModalContainer aria-disabled={disabled} aria-controls={mensage.type}>
            <p>{mensage.mensage}</p>
            <figure>
                <MdError className="error"/>
                <MdWarning className="warning"/>
                <MdCheckCircle className="sucess"/>
            </figure>
            <span></span>
        </ModalContainer>
        <Loading  aria-dropeffect={request}>
            <img src={gif} alt="loading"/>
            <span>Aguarde...</span>
        </Loading>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
       mensage:state.modal.text,
       request:state.modal.request
    }
}
  
const mapDispatchToProps = (dispatch)=>
    bindActionCreators(Creators,dispatch)
  
export default connect(mapStateToProps,mapDispatchToProps)(ModalHandler);
  
  