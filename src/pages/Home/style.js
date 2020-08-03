import styled from 'styled-components';

export const FullContainer = styled.main`
    background: var(--theme-color-1);
    min-height:100vh;
    padding:20px 0px;
`;

export const FormCreateTask = styled.form`
    background:var(--theme-color-2);
    padding: 20px;
    border-radius: 10px;
    margin-top:20px;
    box-sizing:border-box;
    display:flex;

    button{
        background: var(--theme-color-1);
    border: unset;
    color: var(--theme-color-2);
    padding: 0px 20px;
    margin-left: 10px;
    font-weight: 400;
    border-radius: 5px;
    text-transform: uppercase;
    }
`;

export const ContainerTask = styled.ul`
    background:white;
    padding:20px 30px;
    box-sizing:unset;
    border-radius:15px;
`;

export const TogglerTask = styled.div`
    max-height:20px;
    overflow:hidden;
    transition:0.5s;
    margin-bottom:20px;
   
    
    &[aria-dropeffect="true"]{
        max-height:180px;
        opacity:1;
    }

    .btn-showform{
        background: unset;
        border: 0;
        padding: 0;
        color: var(--theme-color-1);
        height: 20px;
        line-height: 20px;
        margin-left:auto;
        display:block;
        cursor:pointer;
        transition:0.5s;

        svg{
            display: inline-block;
            height: 20px;
            line-height: 20px;
            vertical-align: bottom;
            margin-right: 5px;
        }

        &:hover{
            opacity:0.8;
        }
    }

    form{
        opacity:0;
        transition:0.5s;
    }

    &[aria-dropeffect="true"] form{
        opacity:1;
    }

`;
