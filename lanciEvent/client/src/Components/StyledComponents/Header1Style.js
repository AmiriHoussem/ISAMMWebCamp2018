import styled from 'styled-components';
const Container = styled.div`
background:url("https://financesonline.com/uploads/2017/10/ev.jpg") no-repeat center center fixed ;
background-size:cover;
min-height:700px;
margin:0;
padding:3%;
    /* Large devices (desktops, less than 1200px)*/
    @media (max-width: 1200px) {
        text-align:center;
    }
`
const Image = styled.img`
width:5px;
`
export {Container,Image};