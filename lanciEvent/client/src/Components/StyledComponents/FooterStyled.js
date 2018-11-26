import styled from 'styled-components';
const Contaner = styled.h1`
    text-align: center;
    font-size: 100%;
    color: #2c3e50;
    margin: 8px;
    font-weight: 400;
/* Extra small devices (portrait phones, less than 576px)*/
@media (max-width: 576px) {
    text-align:center;
    font-size:23px;
    color:#2c3e50;
    margin:12px;
    font-weight:300;
}
/* Large devices (desktops, less than 1200px)*/
@media (max-width: 1200px) {
    text-align: center;
    font-size: 15px;
    color: #2c3e50;
    margin: 8px;
    font-weight: 400;
}
`
export {Contaner};