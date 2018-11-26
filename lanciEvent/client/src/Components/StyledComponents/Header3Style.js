import styled from 'styled-components';
const Container =styled.div`
    font-size:30px;
    padding:25px;
    padding-left:100px;
    background-color:#16a085;
    /* Large devices (desktops, less than 1200px)*/
    @media (max-width: 1200px) {
    padding-left:80px;
    }
`
const Title = styled.h1`
    color:#c0392b;
    font-size:100%;
    text-align:center;
    margin:0;
    /* Large devices (desktops, less than 1200px)*/
    @media (max-width: 1200px) {
    font-size:140%;
    }

`
const TheLink = styled.a`
text-decoration:none;
color:#f39c12;
`

export {Container,Title,TheLink};