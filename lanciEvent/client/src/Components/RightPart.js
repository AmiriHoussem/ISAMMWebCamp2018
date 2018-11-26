import React, { Component } from 'react';
//******** Start Import Components ********//

//******** End Import Components ********//
//******** Start Styled-Components Imports ********//
import {Container} from './StyledComponents/RightPartStyle';
//******** End Styled-Components Imports ********//

class RightPart extends Component {
    constructor(props){
        super(props);
        this.state = {
            Event:[
                {
                    name:"ISAMM WebCamp",
                    participant:200,
                    interessant:700,
                    men:120,
                    women:80,
                    raking:2.3
                },
                {
                    name:"Coding Land",
                    participant:1000,
                    interessant:1800,
                    men:800,
                    women:200,
                    raking:5
                },
                {
                    name:"Top Coders",
                    participant:10,
                    interessant:0,
                    men:9,
                    women:1,
                    raking:0.2
                },
                {
                    name:"Ensi WebCamp",
                    participant:250,
                    interessant:1000,
                    men:50,
                    women:200,
                    raking:3.2
                },
                {
                    name:"Houssem Event",
                    participant:550,
                    interessant:2000,
                    men:500,
                    women:50,
                    raking:4
                }
                ]
        }
    }
    render() {
return (
    <Container>
        <h1>Your Event {this.state.Event[0].name}</h1>
        <div>
            <h3>Participant:</h3>
            <h4>{this.state.Event[0].participant}</h4>
        </div>
        <div>
            <h3>Interessant:</h3>
            <h4>{this.state.Event[0].interessant}</h4>
        </div>
        <div >

        </div>
        <div>

        </div>
        <div>
            <h3>Men : {this.state.Event[0].men} </h3>
            <h3>Women : {this.state.Event[0].women} </h3>
        </div>
        <div>
            <h3>Top Ranking</h3>
            <div>

            </div>

        </div>
    </Container>
);
}
}


export default RightPart;
