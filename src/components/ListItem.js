import React from 'react'
import styled from 'styled-components'

const StyledListItem = styled.li`
    background-color: transparent;
    border-bottom: solid 2px white;
    color: white;
    width: 100%;
    height:10vh;
    margin:0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    font-size: 2rem;
    position:relative;
`;

const StyledAdd = styled.button`
    height: 2vh;
    width:2vh;
    background-color: ${({ cart }) => cart ? 'red' : 'green'};
    border:none;
    position: absolute;
    top:0;
    right:0;
`;

const ListItem = ({ children, cart }) => {
    return (
        <StyledListItem>
            <StyledAdd cart={cart}>k</StyledAdd>
            {children}
        </StyledListItem>
    )
}

export default ListItem;