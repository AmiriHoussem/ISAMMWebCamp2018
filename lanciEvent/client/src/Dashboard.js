import React, { Component } from 'react';
//******** Start Import Components ********//
import LeftPart from './Components/LeftPart';
import RightPart from './Components/RightPart';
//******** End Import Components ********//
//******** Start Styled-Components Imports ********//
import {Container} from './Components/StyledComponents/DashboardStyle';
//******** End Styled-Components Imports ********//

class App extends Component {
render() {
return (
    <Container>
        <LeftPart />
        <RightPart />
    </Container>
);
}
}


export default App;
