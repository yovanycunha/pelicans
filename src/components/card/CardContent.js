import styled from 'vue-styled-components';
import {StyledContent} from './Content';

const cardContentProps = {posterUrl: String};

const CardContent = styled(StyledContent, cardContentProps)`
    position: absolute;
    background-size: cover;
    background-image: url(${props => props.posterUrl});
    `;

export default CardContent;