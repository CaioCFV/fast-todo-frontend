import styled from 'styled-components';

export const FullContainer = styled.main`
    background: linear-gradient(to left top,var(--theme-color-1),var(--theme-color-7));
    min-height:100vh;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding: 50px 0px;
`;

export const Logo = styled.h1`
    font-family: 'Press Start 2P', cursive;
    color:#fff;
    font-size:30px;
    margin-bottom:20px;
   
    span{
        font-family: 'Roboto Mono', monospace;
        display:block;
        font-size:10px;
    }

    span:before{
        content: "";
        display: block;
        height: 1px;
        width:300px;
        margin: 3px -20px 8px;
        background: repeating-linear-gradient(to left, transparent,#fff,transparent);
    }
    .logo-icon{
        display:block;
        font-size:50px;
        margin:0 auto 10px;
        opacity:0.5;
    }
`;


export const FormContainer = styled.form`
    background: #fff;
    width:calc(100% - 50px);
    max-width: 500px;
    padding:50px;
    border-radius: 10px;


    fieldset + fieldset{
        margin-top:20px;
    }

    @media all and (max-width:567px){
        padding: 40px 30px;
    }
`;


export const PageDescription = styled.h2`
    color:#fff;
    font-weight:100;
    max-width:500px;
    text-align:center;
    margin-bottom:50px;
    line-height:20px;
`;


export const Button = styled.button`
   height:50px;
   margin-top:20px;
   width:100%;
   background:var(--theme-color-7);
   border:unset;
   color:#fff;
   cursor:pointer;
   outline:none;
   transition:0.3s;

   &:hover{
       opacity:0.9;
   }
`;


export const Cadastro = styled.div`
    width:calc(100% - 50px);
    max-width: 500px;
    margin-top:20px;
    text-align:center;

    h3{
        color:#fff;
        font-size:15px;
    }

    a{
        color:#fff;
        font-weight:300;
        text-decoration:none;
    }
    @media all and (max-width:567px){
        h3,a{
            display:block;
        }
    }
`;


export const Footer = styled.footer`
    width:100%;

    &:before{
        content:"";
        display: block;
        height: 1px;
        width:calc(100% - 50px);
        max-width:400px;
        margin: 80px auto 20px auto;
        background: repeating-linear-gradient(to left, transparent,#fff,transparent);
    }

    &>div{
        display:flex;
        justify-content: center;
    }

    a+a{
        margin-left:10px;
    }

    svg{
        font-size:30px;
        color:#fff;
        text-decoration:none;
        opacity:0.5;
        transition:0.5s;
    }

    a:hover svg{
        opacity:1;
    }
`;
