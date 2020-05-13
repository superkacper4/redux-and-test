import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { addToCart } from '../actions/cart.actions'
import ListItem from './ListItem'

const StyledList = styled.ul`
    margin: 0 auto;
    padding:0;
    background-color: #444;
    color: white;
    width: 60%;
    height:100vh;
`;

const List = ({ lists, addToCart, deleteFromList }) => {
    const handleClick = (text, id) => {
        console.log('dzial')
        addToCart(text, id);
        deleteFromList(id)
    }

    const compare = (a, b) => {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    }


    return (
        <StyledList>
            {lists.sort(compare)
                .map((item) => (
                    <ListItem key={item.id} onClick={() => handleClick(item.text, item.id)}>{item.text}</ListItem>
                ))}
        </StyledList >
    )
}

const mapStateToProps = state => ({
    lists: state.lists
})

const mapDispatchToProps = dispatch => ({
    addToCart: (text, id) => dispatch(addToCart(text, id)),
    deleteFromList: (id) => dispatch({
        type: "DELETE_FROM_LIST",
        id
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(List);