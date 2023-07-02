
import { Formik, Field} from "formik";

import { useNavigate } from "react-router-dom";
import { auth,createUserWithEmailAndPassword,sendEmailVerification,} from "../../firebase/firebase-utils";
import { Formulario,Inputs,InputsContainer,Labels,RegisterContainer,WrongResponse} from "./RegisterContainer";
import { Title } from "../../components/common/PagesStyles";
import { StyledButton, } from "../../components/common/Button";
import { registerInitialValues } from "../../Formik/initialValues";
import { registerValidation } from "../../Formik/validationSchema";

const Register = () => {
  const navigate = useNavigate();


  const handleRegister = async (values, { setSubmitting, setFieldError }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      const actionCodeSettingsVerification = {
        url: `${window.location.origin}/Register`,
        handleCodeInApp: true,
      };
      sendEmailVerification(user, actionCodeSettingsVerification)
        .then(() => {
          alert(
            `Mensaje de verificación enviado al correo electrónico ${values.email}.`
          );
          localStorage.setItem("username", user.displayName);
        })
        .catch((error) => {
         
          alert("Error al enviar el mensaje de verificación.");
        });
      navigate("/");
    } catch (error) {
      setSubmitting(false);
      setFieldError("email", error.message);
    }
  };


  return (
    <RegisterContainer>
      <Title>Registro</Title>

      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidation}
        onSubmit={handleRegister}
      >
        {({ isSubmitting }) => (
          <Formulario>
            <InputsContainer>
            <Labels>
              Correo electrónico:
              <Field type="email" name="email" as={Inputs} />
              <WrongResponse name="email" component="p" />
            </Labels>
            <Labels>
              Contraseña:
              <Field type="password" name="password" as={Inputs} />
              <WrongResponse name="password" component="p" />
            </Labels>
            </InputsContainer>
            <StyledButton type="submit" disabled={isSubmitting}>
              Registrarse
            </StyledButton>
           
          </Formulario>
        )}
      </Formik>
    
      
    </RegisterContainer>
  );
};

export default Register;