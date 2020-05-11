import React from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'

const StyledList = styled.ul`
    margin: 0 auto;
    padding:0;
    background-color: #444;
    color: white;
    width: 60%;
    height:100vh;
`;

const List = () => {
    return (
        <StyledList>
            <ListItem>raz</ListItem>
            <ListItem>dwa</ListItem>
        </StyledList>
    )
}

export default List;