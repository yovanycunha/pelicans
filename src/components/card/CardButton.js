import styled from 'vue-styled-components';

const btnProps = { primary: Boolean }

const CardButton = styled('button', btnProps)`
    width: 33.3%;
    height: 4rem;
    display: inline-block;
    text-decoration: none;
    border-color: ${props => props.primary ? "white" : "transparent"}

`;

export default CardButton;