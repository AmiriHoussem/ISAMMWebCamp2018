import React, { Component } from 'react';
//******** Start Import Components ********//

//******** End Import Components ********//
//******** Start Styled-Components Imports ********//
import {Container,Title,SubContainer,SubMenu,UlList,ItemList} from './StyledComponents/LeftPartStyle';
//******** End Styled-Components Imports ********//

class LeftPart extends Component {
render() {
return (
    <Container>
        <Title>Dashboard</Title>
        <SubContainer>
            <SubMenu>Events</SubMenu>
            <UlList>
                <ItemList>blablabla</ItemList>
                <ItemList>blablabla</ItemList>
                <ItemList>blablabla</ItemList>
            </UlList>
        </SubContainer>
        <SubContainer>
            <SubMenu>Recommendation</SubMenu>
        </SubContainer>
    </Container>
);
}
}


export default LeftPart;
