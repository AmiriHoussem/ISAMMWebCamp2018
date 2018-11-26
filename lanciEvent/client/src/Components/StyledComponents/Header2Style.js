import styled from 'styled-components';
const Container =styled.div`
    font-size:30px;
    padding:25px;
    padding-left:100px;
    background-color:white;
    min-height:400px;
    /* Large devices (desktops, less than 1200px)*/
    @media (max-width: 1200px) {
    padding-left:80px;
    }
`
const Title = styled.h1`
    color:#008ddf;
    font-size:200%;
    /* Large devices (desktops, less than 1200px)*/
    @media (max-width: 1200px) {
    font-size:140%;
    }
`

export {Container,Title};