import styled from "styled-components";
import { Form ,ErrorMessage} from 'formik';
export const RegisterContainer=styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  `
  export const formContainer=styled.div`
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const Formulario=styled(Form)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 100px;
`
export const WrongResponse=styled(ErrorMessage)`
color: red;
font-family:'Rubik',sans-serif ;
font-weight: 100;
font-size:20px;
`

export const Labels=styled.label`
font-family:'Rubik',sans-serif ;
font-weight: 500;
font-size: 25px;

`
export const Inputs=styled.input`
border-radius: 10px;

&:hover{
border: 1px solid lightblue;

}

`
export const InputsContainer=styled.div`
flex-direction: column;
width: 200px;
flex-wrap: wrap;

padding: 20px;
`


