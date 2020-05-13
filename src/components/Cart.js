import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'


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

const Cart = ({ carts, addToList, deleteFromCart }) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
        console.log(toggle)
    }

    const handleCart = (text, id) => {
        addToList(text, id);
        deleteFromCart(id);
    }
    return (
        <>
            <StyledCartIcon onClick={handleToggle} >Koszyk</StyledCartIcon>
            <StyledCart toggle={toggle}>
                <StyledH2>Koszyk</StyledH2>
                {carts.map((item) => (
                    <ListItem cart key={item.id} onClick={() => handleCart(item.text, item.id)}>{item.text}</ListItem>
                ))}
            </StyledCart>
        </>
    )
}

const mapStateToProps = state => ({
    carts: state.carts,
})



const mapDispatchToProps = (dispatch, ownProps) => ({
    addToList: (text, id) => dispatch({
        type: "ADD_TO_LIST",
        text,
        id
    }),
    deleteFromCart: (id) => dispatch({
        type: "DELETE_FROM_CART",
        id
    })
})

// type: 'ADD_TODO',
// id: todoid++,
// complete: false,
// text
// })

export default connect(mapStateToProps, mapDispatchToProps)(Cart);