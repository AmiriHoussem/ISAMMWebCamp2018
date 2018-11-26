import React, { Component } from 'react';
//******** Start Styled-Components Imports ********//
import {Container,Title,TheLink} from './StyledComponents/Header3Style';
//******** End Styled-Components Imports ********//

//******** Start Components Imports ********//

//******** End Components Imports ********//
class Header2 extends Component{
    render(){
        return(
            <Container>
                <Title>How to organize a successful event <TheLink href="https://www.facebook.com/">See More</TheLink> </Title>
            </Container>
        ); 
    }
}
export default Header2;