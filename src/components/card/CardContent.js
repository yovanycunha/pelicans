import styled from 'vue-styled-components';

const cardContentProps = {posterUrl: String};

const CardContent = styled('div', cardContentProps)`
    border: none;
    width: 90%;
    height: 90%;
    margin:auto;
    position: relative;
    background-size: cover;
    background-image: url(${props => props.posterUrl});
    transition: all 1.5s;
    `;

export default CardContent;