import React, { Component } from 'react';
import logo from '../Images/logo.png';

//******** Start Styled-Components Imports ********//
import {Container,Logo,UlBox,ItemBlock,SignUpBlock,OurLink} from './StyledComponents/NavigationStyle';
//******** End Styled-Components Imports ********//
class Navigation extends Component{
    render(){
        return(
            <Container>
                <Logo src={logo} alt="website logo"/>
                <UlBox>
                    <ItemBlock><OurLink to="/">Home</OurLink></ItemBlock>
                    <ItemBlock>Contact Us</ItemBlock>
                    <SignUpBlock><OurLink to="/Dashboard">Create Event</OurLink></SignUpBlock>
                </UlBox>
            </Container>
        );
    }
}
export default Navigation;