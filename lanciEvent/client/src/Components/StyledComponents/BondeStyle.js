import styled from 'styled-components';
const Container =styled.div`
    font-size:30px;
    background-color:white;
    min-height:400px;
    /* Large devices (desktops, less than 1200px)*/
    @media (max-width: 1200px) {
    padding-left:80px;
    }
`
const Card = styled.div`
    color:#008ddf;
    font-size:200%;
    display:inline-block;
    margin:15px;
    text-align:center;
    padding:15px;
    border:2px solid gray;
    /* Large devices (desktops, less than 1200px)*/
    @media (max-width: 1200px) {
    font-size:140%;
    }
`
const Image =styled.img`
    height:300px;
    width:auto;
`
const Description= styled.p`
    font-size:20px;
    width:400px;
    text-align:left;
    margin:0px;
`
const Btn = styled.button`
padding:15px;
font-size:15px;
border:0;
border-radius:9px;
`

export {Container,Card,Image,Description,Btn};