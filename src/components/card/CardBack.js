import styled from 'vue-styled-components';

const cardProps = {
    plot: String,
    year: String,
    director: String,
}

const CardBack = styled('div', cardProps)`
    border: none;
    width: 90%;
    height: 90%;
    margin:auto;
    position: relative;
    list-style: none;
    font-size: 1.5rem;
    text-align: left;
    padding-top: 2rem;
    line-height: 2rem;
    align-items: center;

    background-color: #fafafa;


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