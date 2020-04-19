import styled from 'vue-styled-components';

const StyledContainer = styled.div`
    max-width: 136rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    box-sizing: border-box;
    &::before {
        content: " ";
        display: table
    }
    &::after {
        clear: both;
    }
`;

export {StyledContainer}