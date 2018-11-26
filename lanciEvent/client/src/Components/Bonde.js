import React, { Component } from 'react';
import card from '../Images/card.png';
//******** Start Styled-Components Imports ********//
import {Container,Card,Image,Description,Btn} from './StyledComponents/BondeStyle';
//******** End Styled-Components Imports ********//
class Header2 extends Component{
    render(){
        return(
            <Container>
                <Card>
                    <Image src={card} alt="the card img" height="400px"/>
                    <Description>
                        this is the description of the page etc...........
                    </Description>
                    <Btn>See More</Btn>
                </Card>
                <Card>
                    <Image src={card} alt="the card img" height="400px"/>
                    <Description>
                        this is the description of the page etc...........
                    </Description>
                    <Btn>See More</Btn>
                </Card>
                <Card>
                    <Image src={card} alt="the card img" height="400px"/>
                    <Description>
                        this is the description of the page etc...........
                    </Description>
                    <Btn>See More</Btn>
                </Card>
            </Container>
        ); 
    }
}
export default Header2;