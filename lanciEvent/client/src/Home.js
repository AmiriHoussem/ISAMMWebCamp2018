import React, { Component } from 'react';
//******** Start Import Components ********//
import Header1 from './Components/Header1';
import Header2 from './Components/Header2';
import Header3 from './Components/Header3';
import ContactUs from './Components/ContactUs';
//******** End Import Components ********//
//******** Start Styled-Components Imports ********//
import {Container} from './Components/StyledComponents/AppStyle';
//******** End Styled-Components Imports ********//

class App extends Component {
render() {
return (
    <Container>
        <Header1 />
        <Header2 />
        <Header3 />
        <ContactUs/>
    </Container>
);
}
}


export default App;
