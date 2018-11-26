import React, { Component } from 'react';
//******** Start Styled-Components Imports ********//
import {Contaner} from './StyledComponents/FooterStyled';
//******** End Styled-Components Imports ********//
class Footer extends Component{
    render(){
        return(
            <div>
                <Contaner>Copyright &copy; 2018 BitDinar.</Contaner>
            </div>
        );
    }
}
export default Footer;