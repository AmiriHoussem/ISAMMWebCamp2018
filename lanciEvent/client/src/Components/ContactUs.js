import React, { Component } from 'react';
//******** Start Styled-Components Imports ********//
import {Title,Container,Form,InputLab,TheInput,TheTextArea,TheSubmit} from './StyledComponents/ContactUsStyle';
//******** End Styled-Components Imports ********//
class ContactUs extends Component{
    render(){
        return(
                <Container>
                    <Title>Contact US</Title>
                    <Form>
                        <InputLab for="fname">First Name :</InputLab>
                        <TheInput type="text" id="fname" name="firstname" placeholder=" Your name.."/>
                        <InputLab for="lname">Second Name :</InputLab>
                        <TheInput type="text" id="lname" name="lastname" placeholder=" Your last name.."/>
                        <InputLab for="lname">E-Mail :</InputLab>
                        <TheInput type="text" id="lname" name="lastname" placeholder=" Your last name.."/>
                        <InputLab for="lname">Phone Number :</InputLab>
                        <TheInput type="text" id="lname" name="lastname" placeholder=" Your last name.."/>
                        <InputLab for="lname">Message :</InputLab>
                        <TheTextArea></TheTextArea><br/>
                        <TheSubmit type="submit" value="Send Now"/>
                    </Form>
                </Container>
        );
    }
}
export default ContactUs;