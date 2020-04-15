import styled from 'vue-styled-components';

const CardContent = styled.div`
    width: 30rem;
    height: 44.5rem;
    background-size: cover;

    @media (max-width: 76rem) {
        width:15rem;
        height: 22.25rem;
    }

    background-image: url("https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg");
`;

export {CardContent}