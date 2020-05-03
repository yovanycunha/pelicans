import styled, {keyframes} from 'vue-styled-components';

const CardButton = styled('button')`
    text-decoration: none;
    border-radius: 50%;
    margin-left: 40%;
    margin-top: 45%;
    outline: none;
    transition: all .1s;
    border: none;
    cursor: pointer;

    &:hover {
        transform: translateY(-.3rem);
        box-shadow: 0rem .5rem 1.3rem 0 rgba(0,0,0,.5);

        
    }

`;

export default CardButton;