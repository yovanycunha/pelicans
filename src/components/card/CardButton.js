import styled from 'vue-styled-components';

const CardButton = styled.button`
    border: none;
    width: 33.3%;
    height: 4rem;
    display: inline-block;
    border-right: .1rem solid white;
    :last-child{
        border-right: none;
    }
`;

export {CardButton}