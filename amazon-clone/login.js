import React from 'react'
import styled from 'styled-components'
import {auth, provider} from './firebase'


function login({setUser}) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user;
            let newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            //local storage only accepts strings and it acts as a browser state
            localStorage.setItem('user',JSON.stringify(newUser))
            setUser(newUser)

        }).catch((error)=>{
            alert(error.message);
        })
    }
    return (
        <Container>
            <Content>
                <Logo>
                    <img src = {"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"}/>
                </Logo>
                <LoginButton
                    onClick={signIn}
                >
                    Sign in with Google
                </LoginButton>
            </Content>
        </Container>
    )
}

export default login

const Container = styled.div `
    width = 100%;
    background-color: #f8f8f8;
    min-height: 100vh; // height of the browser viewport
    display: grid;
    place-items: center;
`
const Content = styled.div `
    padding: 100px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px gray;
    text-align: center;
`
const Logo = styled.div `
    img{
        height: 100px;
    }
    margin-bottom: 40px;
`
const LoginButton = styled.button `
    background-color: #f0c14b;
    height: 40px;
    border: 2px solid #a88734;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    :hover {
        background: #ddb347;
    }
`