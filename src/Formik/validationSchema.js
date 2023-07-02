import * as Yup from'yup'
import { regEmail } from './regExp'



export const registerValidation=Yup.object({


email:Yup.string()
.matches(regEmail,'Email no valido')
.required('Campo Requerido'),
password:Yup.string()
.min(6,'Contaseña minima 6 caracteres')

})