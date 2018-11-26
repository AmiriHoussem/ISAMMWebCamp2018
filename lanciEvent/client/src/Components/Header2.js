import React, { Component } from 'react';
//******** Start Styled-Components Imports ********//
import {Container,Title} from './StyledComponents/Header2Style';
//******** End Styled-Components Imports ********//

//******** Start Components Imports ********//
import Bonde from './Bonde';
//******** End Components Imports ********//
class Header2 extends Component{
    render(){
        return(
            <Container>
                <Title>Top Events</Title>
                <Bonde />
            </Container>
        );
    }
}
export default Header2;