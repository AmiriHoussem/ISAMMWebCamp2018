import React, { Component } from 'react';
//******** Start Styled-Components Imports ********//
import {Container,SearchBar,FirstRow,TitleLi,SecondRow,SearchInput,Btn} from './StyledComponents/RechercheStyle';
//******** End Styled-Components Imports ********//
class Recherche extends Component{
    render(){
        return( 
            <Container> 
                <SearchBar>
                    <FirstRow>
                        <TitleLi>Event Name</TitleLi>
                        <TitleLi>Start Date </TitleLi>
                        <TitleLi>End Date</TitleLi>
                    </FirstRow>
                    <SecondRow>
                        <td><SearchInput type="text" /></td>
                        <td><SearchInput type="text" /></td>
                        <td><SearchInput type="text" /></td>
                        <td><Btn>Submit  </Btn></td>
                    </SecondRow>
                </SearchBar>
            </Container>
        );
    }
}
export default Recherche;