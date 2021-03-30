import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
    Link
  } from "react-router-dom";

function Header({cartItems, user, signOut}) {

    const getCount = () => {
        let count = 0;

        cartItems.forEach((item) => {
            count+= item.product.quantity;
        });
        
        return count;
    }
    return (
        <Container>
             <HeaderLogo>
                 <Link to = "/">
                    <img src = {"https://i.imgur.com/7I9Was5.png"}/>
                 </Link>
                 
             </HeaderLogo>

             <HeaderOptionAddress>
                 <LocationOnIcon/>
                 <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                 </HeaderOption>
                 
             </HeaderOptionAddress>

             <HeaderSearch>
                 <HeaderSearchInput type='text'/>
                 <HeaderSearchContainer>
                     <SearchIcon/>
                 </HeaderSearchContainer>
             </HeaderSearch>

             <HeaderNavItems>
                 <HeaderOption>
                     <OptionLineOne>Hello, {user.name}</OptionLineOne>
                     <OptionLineTwo>Account & Lists</OptionLineTwo>
                     <OptionLineThree onClick = {signOut}>Sign Out</OptionLineThree>

                 </HeaderOption>

                 <HeaderOption>
                     <OptionLineOne>Returns</OptionLineOne>
                     <OptionLineTwo>& Orders</OptionLineTwo>
                 </HeaderOption>
                
                
                <HeaderOptionCart>
                    <Link to = "/cart">
                        <ShoppingBasketIcon/>
                        <CartCount>{getCount()}</CartCount>
                    </Link>
                </HeaderOptionCart>
                
                 

             </HeaderNavItems>

        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 70px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`

const HeaderLogo = styled.div`
    img{
        width: 100px;
        margin-left: 11px;
        margin-right: 11px;
    }
`
const HeaderOptionAddress = styled.div`
    display: flex;
    padding-left: 9px;
    align-items: center;
`

const OptionLineOne = styled.div`
    
`
const OptionLineTwo = styled.div`
    font-weight: 700;
    
`
const OptionLineThree = styled.div `
    cursor: pointer;
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 4px;
    background-color: white;
    :focus-within{
        box-shadow: 0 0 0 3px #F90;
    }
`
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    :focus{
        outline: none;
    }
    border: 0;
`

const HeaderSearchContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderNavItems = styled.div`
    display: flex;

`
const HeaderOption = styled.div`
    //TRouBLe
    padding: 10px 9px 10px 9px;
`
const HeaderOptionCart = styled.div`
    display: flex; 
    a { 
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: None;
    }
`
const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`