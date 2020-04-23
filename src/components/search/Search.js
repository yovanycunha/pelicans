import styled from 'vue-styled-components';

const Input = styled.input`
    padding-left: 1rem;
    border: none;
    border-radius: 1rem;
    width: 30rem;
    height: 3rem;
    outline: none;
    background-color: #ecefff;
    opacity: 0;

    @media only screen and (max-width: 768px) {
        width: 15rem;
    }
`;

export {Input}