
import styled from "styled-components";


export const FooterStyled=styled.div`

position:relative;
left:0;
bottom: 0;
right:0;
background-color: red;
font-family: 'Rubik',sans-serif;
font-weight: 500;
height: fit-content;
display:flex;
width: 100%;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
@media (max-width: 900px) {
flex-direction: column;


}

`