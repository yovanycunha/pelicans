import styled, {keyframes} from 'vue-styled-components';

const btnProps = { primary: Boolean };

const CardButton = styled('button', btnProps)`
    text-decoration: none;
    border: none;
    border-radius: 50%;
    display: inline-block;
    z-index: 2;
    margin-left: 40%;
    margin-top: 45%;

`;

export default CardButton;