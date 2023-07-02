import { useDispatch ,useSelector} from "react-redux";
import { loginSuccessAction, loginErrorAction }from "../../redux/userActions";


import { deleteUser } from "../../firebase/firebase-utils";
import { Formik, Field } from "formik";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../../firebase/firebase-utils";
import { Formulario,Inputs,InputsContainer,Labels,RegisterContainer,WrongResponse,} from "./../Register/RegisterContainer";
import { Title } from "../../components/common/PagesStyles";
import { StyledButton, StyledButton2 } from "../../components/common/Button";
import { registerInitialValues } from "../../Formik/initialValues";
import {  registerValidation } from "../../Formik/validationSchema";
import { ButtonDelete } from "./logStyle";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const userEmail = useSelector((state) => state.user.userEmail);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn) {
      setIsButtonDisabled(true);
    }
  }, []);



  const handleLogin = async (values, { setSubmitting, setFieldError }) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      setSubmitting(false);
      dispatch(loginSuccessAction(values.email));
      setLoginSuccess(true);
      setIsButtonDisabled(true);
      localStorage.setItem("loggedIn", "true");
      setTimeout(() => {
        navigate("/");
      }, 3000); 
    } catch (error) {
      setSubmitting(false);
      setFieldError("email", error.message);
      setLoginError(error.message);
      dispatch(loginErrorAction(error.message));
    }

  };
  

  const [deleteError, setDeleteError] = useState(null);
const [deleteLast ,setLastUser]=useState(false)
  
const handleDeleteUser=async()=>{
  if(userEmail){
    try{
    const user=auth.currentUser
    await deleteUser(user);
    setLastUser(true);

    localStorage.removeItem("loggedIn");
    setIsButtonDisabled(false);
    setTimeout(()=>{
    setLastUser(false);
    },3000)
    dispatch(loginErrorAction(null));
    }catch(error){
    setDeleteError(error.message)
    
    }}else{
setDeleteError("Regístrese e inicie sesión para eliminar al usuario");

    }
    
    
    }
  

  return (
    <RegisterContainer>
      <Title>Iniciar sesión</Title>
      {loginSuccess && (
        <p>Inicio de sesión exitoso. Serás redirigido a la página principal.</p>
      )}
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidation}
        onSubmit={handleLogin}
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
            <StyledButton type="submit" disabled={isSubmitting||isButtonDisabled}>
              Iniciar sesión
            </StyledButton>
            
          </Formulario>
        )}
      </Formik>

      
      {loginError && <p>Error al iniciar sesión: {loginError}</p>}

       < ButtonDelete> 
      <StyledButton2 onClick={handleDeleteUser}>Eliminar usuario</StyledButton2>
      {deleteLast && <p>El usuario fue eliminado </p>}
      {deleteError&&<p>Para eliminar el usuario registrese y/o inicie sesion </p>}
      </ButtonDelete>
    </RegisterContainer>
  );
};

export default Login;













