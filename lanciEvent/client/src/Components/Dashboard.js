import React, { Component } from 'react';
//******** Start Import Components ********//
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
//******** End Import Components ********//
//******** Start Styled-Components Imports ********//
import {Container} from './StyledComponents/DashboardStyle';
//******** End Styled-Components Imports ********//

class Dashboard extends Component {
render() {
return (
    <Container>
        <LeftPart />
        <RightPart />
    </Container>
);
}
}


export default Dashboard;
