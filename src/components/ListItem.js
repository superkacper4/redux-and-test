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
    height: 100%;
    width:10%;
    background-color: ${({ cart }) => cart ? 'red' : 'green'};
    border:none;
    position: absolute;
    top:0;
    right:0;
    border: solid 2px black;
    transition: background-color .5s;
    cursor: pointer;

    &:hover{
        background-color: ${({ cart }) => cart ? 'orange' : 'lightgreen'}
    }
`;

const ListItem = ({ children, cart, onClick }) => {
    return (
        <StyledListItem>
            <StyledAdd cart={cart} onClick={onClick}>k</StyledAdd>
            {children}
        </StyledListItem>
    )
}


export default ListItem;