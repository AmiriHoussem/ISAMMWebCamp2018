import styled from 'styled-components';
const Container = styled.div`
margin:0;
padding:0;
`
const SmartPhone = styled.img`
    position: absolute;
    width: 25%;
    height: auto;
    top: 20%;
    right: 11%;
/* Small devices (landscape phones, less than 768px)*/
@media (max-width: 810px) {
    display:none;
}
/* Large devices (desktops, less than 1200px)*/
@media (max-width: 1200px) {
    position: absolute;
    width: 25%;
    height: auto;
    top: 39%;
    right: 5%;
}
@media (max-width: 1280px) {
    position: absolute;
    width: 25%;
    height: auto;
    top: 53%;
    right: 5%;
}
`

export {Container,SmartPhone};