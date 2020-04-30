import styled, {keyframes} from 'vue-styled-components';

const btnProps = { primary: Boolean };

const CardButton = styled('button', btnProps)`
    text-decoration: none;
    border: none;
    border-radius: 2rem;
    display: inline-block;
    
    margin-right: 2.5%;

    :last-child {
        margin-left:2.5%;
    }

`;

export default CardButton;