import styled,{ keyframes } from 'styled-components';

const timer = keyframes`
  from {
    width:100%;
  }

  to {
    width:0%;
  }
`;


export const ModalContainer = styled.div`
    position:fixed;
    width:320px;
    z-index:1000;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    opacity:1;
    visibility:hidden;
    transition:0.3s;
    border-radius:5px;
    overflow:hidden;
    
    &[aria-controls="0"] {
      background: var(--theme-color-error);
    }

    &[aria-controls="1"] {
      background: var(--theme-color-sucess);
    }

    &[aria-controls="2"] {
      background: var(--theme-color-warning);
    }

    &[aria-disabled="false"]{
        opacity:1;
        visibility:visible;
    }

    &[aria-disabled="false"] span{
        display:block;
        height:5px;
        background:var(--theme-color-2);
        width:100%;
        animation: ${timer} 5s linear;
    }

    p {
      color: white;
      font-weight: 300;
      padding: 20px 60px 20px 20px;
      line-height: 20px;
    }

    .error,
    .warning,
    .sucess{
      display:none;
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      right:20px;
      font-size:25px;
      color:#fff;
    }

    &[aria-controls="0"] .error{
      display:block;
    }

    &[aria-controls="1"] .sucess{
      display:block;
    }

    &[aria-controls="2"] .warning{
      display:block;
    }

`;


export const Loading = styled.div`
    background: var(--theme-color-1);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    visibility: hidden;
    opacity:0;
    padding:0px 50px;
    transition:0.3s;

    &[aria-dropeffect="true"]{
      opacity:1;
      visibility:visible;
    }

    span{
      display: block;
      text-align: center;
      margin: 10px 0px 20px;
      color: #fff;
      font-weight: 300;
      text-transform: lowercase;
    }

    img{
      max-width: 100px;
      margin: 0 auto;
      display: block;
    }
`;