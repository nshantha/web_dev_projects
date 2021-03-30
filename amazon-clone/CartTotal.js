import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

function CartTotal({getCount, getTotalPrice}) {

    
    
    return (
        <Container>
            <SubTotal>Sub Total( {getCount()} items): 
                <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </SubTotal>
            <CheckOutButton>Proceed to Checkout </CheckOutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div `
    flex: 0.3;
    padding: 20px;
    background-color: white;
`

const SubTotal = styled.h3 `
    margin-bottom: 16px;

`
const CheckOutButton = styled.button ` 
    background-color: #f0c14b;
    width : 100%; 
    //vertical - horizontal
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    :hover {
        background: #ddb347;
    }
`