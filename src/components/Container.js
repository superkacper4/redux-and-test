import React from 'react';
import styled from 'styled-components'

import List from './List'
import Cart from './Cart'

const StyledContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: #555;
`;

const Container = () => {
    return (
        <StyledContainer>
            <Cart />
            <List />
        </StyledContainer>
    )
}

export default Container;
