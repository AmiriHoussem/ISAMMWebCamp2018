import styled from 'styled-components';
const Title = styled.h1`
text-align:center;
font-size:300%;
`
const Container = styled.div`
padding:15px;
text-align:center;
background-color:#ebebeb;
`
const Form = styled.form`
`
const InputLab = styled.label`
    display: block;
    color:gray;
    font-size:150%
`
const TheInput =styled.input`
    padding: 10px;
    width: 50%;
    margin: 9px;
`
const TheTextArea =styled.textarea`
    width:50%;
    height:100px;
    margin-top:9px;
`
const TheSubmit=styled.input`
    padding:7px;
    background-color:#e67e22;
    color:#2c3e50;
    border:none;
    font-size:100%;
    margin-top:12px;

`

export {Title,Container,Form,InputLab,TheInput,TheTextArea,TheSubmit};