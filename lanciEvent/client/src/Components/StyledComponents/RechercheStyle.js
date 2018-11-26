import styled from 'styled-components';
const Container = styled.div`
position:absolute;
top:80%;
width:100%;
`
const SearchBar = styled.table`
width:850px;
height:70px;
margin-left:25%;
padding: 50px;
background:#008ddf;
border-radius:9px;
`
const FirstRow = styled.tr`
color:black;
`
const TitleLi =styled.td`
padding:7px;
font-weight:bold;
`
const SecondRow = styled.tr`

`
const SearchInput = styled.input `
padding:9px;
width:200px;
border-radius:5px;
border:none;
opacity:0.7;
margin-left:7px;
`
const Btn =styled.button`
background-color:#d35400;
font-weight:bold;
font-size:15px;
margin-left:7px;
padding:12px;
border:none;
border-radius:7px;
`
export {Container,SearchBar,FirstRow,TitleLi,SecondRow,SearchInput,Btn}