import React, { useState } from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'

const StyledCart = styled.ul`
    position: absolute;
    top:0%;
    right:0;
    margin: 0 auto;
    padding:0;
    background-color: #333;
    color: white;
    width: 40vw;
    height:100vh;
    transform: ${({ toggle }) => (toggle ? 'translateX(0)' : 'translateX(40vw)')};
    z-index: 3;
    transition: transform .5s;
`;

const StyledCartIcon = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    background-color: white;
    border: none;
    border-radius: 50%;
    margin:20px;
    z-index: 99;
    font-size: 25px;
    width: 100px;
    height: 100px;
`;

const StyledH2 = styled.h2`
    font-size: 4rem;
    padding:20px;
`;

const Cart = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
        console.log(toggle)
    }
    return (
        <>
            <StyledCartIcon onClick={handleClick} >Koszyk</StyledCartIcon>
            <StyledCart toggle={toggle}>
                <StyledH2>Koszyk</StyledH2>
                <ListItem cart>trezy</ListItem>
            </StyledCart>
        </>
    )
}

export default Cart;