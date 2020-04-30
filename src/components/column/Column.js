import styled from 'vue-styled-components';

const columnProps = {
    desktop: Number,
    tablet: Number,
    phone: Number
}

const getWidth = (value) => {
    if(!value) retun;
    const width = (value / 12 * 100);
    return `width: ${width}%`;
}

const Column = styled('div', columnProps)`
    float: left;
    box-sizing: border-box;
    width: 100%;
    height: 50rem;
    margin-bottom: 4rem;

    /*
     Atentar para a ordem das medias pois elas importam
    */
    @media only screen and (max-width: 768px) {
        ${props => props.phone && getWidth(props.phone)};
    }
    
    @media only screen and (min-width: 768px) {
        ${props => props.tablet && getWidth(props.tablet)};
    }
    
    @media only screen and (min-width: 1024px) {
        ${props => props.desktop && getWidth(props.desktop)};
    }
`;

export default Column;