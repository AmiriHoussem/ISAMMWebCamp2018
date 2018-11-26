import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Container = styled.div`
background-color:#008ddf;
width:100%;
min-height:100px;
`
const Logo = styled.img`
width:10%;
height:auto;
margin-left:2.2%;

/* Small devices (landscape phones, less than 768px)*/
@media (max-width: 768px) {
    margin:1%;
    width:160px;
    height:auto;    
}
`
const UlBox = styled.ul`
float: right;
padding: 6px;
margin-top:3%;
margin-right: 16px;
border: none;
cursor: pointer;
/* Small devices (landscape phones, less than 768px)*/
@media (max-width: 768px) {
    float: right;
    padding: 6px;
    margin-top:12px;
    margin-right: 2px;
    border: none;
    cursor: pointer;
}
`
const ItemBlock =styled.li`
color:white;
font-size:20px;
display:inline-block;
margin-right: 16px;
/* Small devices (landscape phones, less than 768px)*/
@media (max-width: 768px) {
    color:white;
    font-size:16px;
    display:inline-block;
    margin-right: 13px;
}
`
const SignUpBlock =styled.li`
color:white;
font-size:19px;
border:2px white solid;
border-radius:10px;
padding:10px;
display:inline-block;
margin-right: 16px;
margin-left:20px;
/* Small devices (landscape phones, less than 768px)*/
@media (max-width: 768px) {
    color:white;
    font-size:16px;
    border:2px white solid;
    border-radius:10px;
    padding:7px;
    display:inline-block;
    margin-right: 16px;
    margin-left:3px;
}
`
const OurLink = styled(NavLink)`
    text-decoration:none;
    color:white;
`

export {Container,Logo,UlBox,ItemBlock,SignUpBlock,OurLink};