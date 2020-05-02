import styled from 'vue-styled-components';
import { StyledContent } from "./Content";


const CardBack = styled(StyledContent)`
    position: relative;
    list-style: none;
    font-size: 1.5rem;
    text-align: left;
    line-height: 2rem;
    align-items: center;
    opacity: 0;
    background-color: transparent;


    ul {
        padding: .5rem 1rem;
        text-align: justify;
        margin: auto;
        height: 100%;
    }

    li {
        display: block;
        margin-bottom: 1.5rem;
    }
`;


export default CardBack