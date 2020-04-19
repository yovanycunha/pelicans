import styled, {keyframes} from 'vue-styled-components';

const btnProps = { primary: Boolean };

const CardButton = styled('button', btnProps)`
    max-width: 33.3%;
    height: 4rem;
    text-decoration: none;
    border: solid .4rem;
    border-radius: 2rem;
    border-color: ${props => props.primary ? "white" : "transparent"};

    display: inline-block;
    position: relative;
    top: 50%;
    left: 0%;
    transform: translate(0%, -50%);

    margin: 2rem;

`;

export default CardButton;