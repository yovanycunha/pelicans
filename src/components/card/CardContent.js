import styled from 'vue-styled-components';

const cardContentProps = {posterUrl: String};

const CardContent = styled('div', cardContentProps)`
    border: none;
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
    background-image: url(${props => props.posterUrl});
    transition: all .4s;
    `;

export default CardContent;