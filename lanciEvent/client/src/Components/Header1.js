import React, { Component } from 'react';
//******** Start Styled-Components Imports ********//
import {Container} from './StyledComponents/Header1Style';
//******** End Styled-Components Imports ********//
//******** Start Components Imports ********//
import Recherche from './Recherche';
//******** Start Components Imports ********//
class Header1 extends Component{
    render(){
        return( 
            <Container> 
                <Recherche />
            </Container>
        );
    }
}
export default Header1;