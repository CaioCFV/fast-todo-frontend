import styled from 'styled-components';

export const Container = styled.div`
    width:300px;
    background:white;
    height:150px;
    border-radius:15px;
    padding:20px;
    margin-left:20px;
    position:sticky;
    top:20px;

    li{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:5px 0;
    }

    li+li{
        border-top:1px solid var(--theme-color-3);
        margin-top:5px;
    }

    @media all and (max-width:991px){
        position:static;
        width:100%;
        margin:0;
        margin-bottom:20px;
    }
`;
