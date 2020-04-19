import styled from 'vue-styled-components';

const columnProps = {
    desktop: String,
    tablet: String,
    phone: String
}

const getWidth = (value) => {
    if(!value) retun;
    const width = (value / 12 * 100);
    return `width: ${width}%`;
}

const Column = styled('div', columnProps)`
    float: left;
    padding: .25rem;
    box-sizing: border-box;
    width: 100%;

    /*
     Atentar para a ordem das medias pois elas importam
    */
    @media only screen and (max-width: 870px) {
        ${props => props.phone && getWidth(props.phone)};
    }
    
    @media only screen and (min-width: 870px) {
        ${props => props.tablet && getWidth(props.tablet)};
    }
    
    @media only screen and (min-width: 1150px) {
        ${props => props.desktop && getWidth(props.desktop)};
    }

    border: .2rem solid black;
    background-color: red;
`;

export default Column;