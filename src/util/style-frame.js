import styled from 'styled-components';

export const MaxContainer = styled.div`
    width: calc(100% - 100px);
    max-width: 1366px;
    margin: 0 auto;

    
    @media all and (max-width:767px){
        width: calc(100% - 30px);
    }
`;

