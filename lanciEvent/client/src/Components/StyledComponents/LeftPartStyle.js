import styled from 'styled-components';
const Container = styled.div`
    background:#bdc3c7;
    float:left;
    width:20%;
    min-height:900px;
    max-height:900px;

`
const Title = styled.h1`
text-align:center;
margin-top:15px;
color:white;
`
const SubContainer = styled.div`
    margin:20px;
`
const SubMenu =styled.h2`
    color:#d35400;
`
const UlList = styled.ul`
    list-style-type:none;
    margin-right:50px;
    border-radius:7px;
`
const ItemList =styled.li`
    text-align:center;
    padding:5px;
    color:#2c3e50;
    background-color:#ecf0f1;
    display:inline-block;
    width:100%;
    opacity:0.5;
    :hover{
        background-color:#ecf0f1;
        opacity:1;
        
    }
`
export {Container,Title,SubContainer,SubMenu,UlList,ItemList}