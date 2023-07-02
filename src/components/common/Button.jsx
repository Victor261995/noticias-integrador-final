
import styled from 'styled-components';

export const StyledButton=styled.button`
display: flex;
margin: 0 auto;
 background-color: lightblue;
 font-size: large;
 cursor: pointer;
 border-radius: 10px;
 border: 1px solid black;

`
export const StyledButton2=styled.button`
display: flex;
margin: 0 auto;
 background-color: #f58181;
 font-size: large;
 cursor: pointer;
 border-radius: 10px;
 border: 1px black;

`
export const ButtonLeer=styled.button`
background-color: #85f885;
gap: 10px;

font-size: large;
 cursor: pointer;
 border-radius: 10px;
`
export const ButtonSaves=styled.button`
font-size: 25px;
background-color: transparent;
border: none;
cursor: pointer;
@media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }

  :hover {
    color: blue;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  height: 150px;
  width: 100%;
`;


