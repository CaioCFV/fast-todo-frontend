import styled from 'styled-components';

export const ContainerHeader = styled.header`
    &>div{
        background: white;
        padding: 20px 30px;
        box-sizing: border-box;
        border-radius: 15px;
        margin-bottom:20px;
        display:flex;
        justify-content:space-between;
        align-items:center;

        &>*{
            flex:1;
        }
    }

    .logout{
        text-align:right;
    }

    .logout svg{
        font-size:30px;
        color:var(--theme-color-5);
    }
`;


export const Logo = styled.h1`
    font-family: 'Press Start 2P', cursive;
    color:var(--theme-color-1);
    font-size:20px;
    max-width:160px;
   
    span{
        font-family: 'Roboto Mono', monospace;
        display:block;
        font-size:10px;
    }

    span:before{
        content: "";
        display: block;
        height: 1px;
        width:200px;
        margin: 3px -20px 8px;
        background: repeating-linear-gradient(to left, transparent,var(--theme-color-1),transparent);
    }

    .logo-icon{
        display:block;
        font-size:40px;
        margin:0 auto 10px;
        opacity:0.5;
    }
`;


export const User = styled.p`

`;