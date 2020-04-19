import styled from 'vue-styled-components';

const Row = styled.div`
    width: 100%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    &::before{
        content:' ';
        display: table;
    }
    &::after {
        clear: both;
    }
`;

export {Row};