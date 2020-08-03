import styled from 'styled-components';

export const TaskItem = styled.li`
    display:flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    position:relative;

    &+ li{  
        border-top:1px solid var(--theme-color-3);
    }
`;

export const TaskName = styled.div`
    width:100%;
    margin-right:30px;
   
    p{
        font-weight: 400;
        color: var(--theme-color-8);
        margin-bottom: 5px;
        line-height: 20px;
        font-size: 15px;
        width: 100%;
        word-break: break-word;
    }

    span{
        font-size: 10px;
        font-weight: 400;
        color: var(--theme-color-7);
    }

`;

export const TaskStatus = styled.div`
    width: 200px;
    text-align: center;
    margin-right: 20px;


    p{
        font-size: 10px;
        font-weight: 400;
        color: var(--theme-color-4);
    }

    span{
        display:block;
        width:20px;
        height:20px;
        background:var(--theme-color-error);
        margin:5px auto 0px;
        border-radius:100%;
    }

    &[aria-controls="true"] span{
        background:var(--theme-color-sucess);
    }
`;

export const TaskContainerUpdate = styled.div`
    position:absolute;
    left:0;
    top:0;
    z-index:10;
    transition:0.2s;
    width:100%;
    height:100%;
    border:1px solid var(--theme-color-3);
    visibility:hidden;
    opacity:0;
    background:#fff;
    display:flex;
    align-items:center;
    justify-content:space-between;

    textarea{
        resize:none;
        font-size:15px;
        flex:1;
        height:100%;
        margin-right:15px;
        padding:5px;
        border:0;
    }

    &[aria-controls="true"]{
        height:100%;
        opacity:1;
        visibility:visible;
    }

    button {
        height: 40px;
        cursor: pointer;
        border: 0;
        padding: 0px 10px;
        font-size: 13px;
        border-radius: 5px;
        text-transform: uppercase;
        margin-right:15px;
    }

    .save{
        background: var(--theme-color-sucess);
        color: var(--theme-color-3);
    }
    
    .cancel{
        background: var(--theme-color-error);
        color: var(--theme-color-3);
    }
`;
export const TaskControls = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .container-texto{
        text-align:center;
        cursor:pointer;
    }

    svg{
        font-size:25px;
        cursor:pointer;
        width:20px;
        height:20px;
    }

    .container-texto + .container-texto{
        margin-left:20px;
    }

    .ok{
        color:var(--theme-color-sucess);
    }

    .delete{
        color:var(--theme-color-error);
        font-size:15px;
        width: 15px;
    }

    .edit{
        color:var(--theme-color-6);
        font-size:20px;
        width: 15px;
    }

    .reabrir, .concluir{
        display:none;
    }
    
    span{
        font-size: 10px;
        width: 42px;
        text-align: center;
        display: block;
        margin-top: 5px;
    }

    &[aria-controls="true"] .reabrir{
        display:block;
    }

    &[aria-controls="false"] .concluir{
        display:block;
    }
`;