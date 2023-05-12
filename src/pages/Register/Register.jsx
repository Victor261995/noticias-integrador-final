import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, sendEmailVerification } from "../../firebase/firebase-utils";
import { Formulario, Inputs, Labels, RegisterContainer } from "./RegisterContainer";
import { formContainer} from "./RegisterContainer";
import { Title } from "../../components/common/PagesStyles";
import { StyledButton } from "../../components/common/Button";

const Register= () => {
   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const actionCodeSettingsVerification = {
        url: `${window.location.origin}/login`,
        handleCodeInApp: true,
      };
      sendEmailVerification(user, actionCodeSettingsVerification)
        .then(() => {
          alert(`Mensaje de verificación enviado al correo electrónico ${email}.`);
          localStorage.setItem('username', user.displayName);
        })
        .catch((error) => {
          console.log(error);
          alert('Error al enviar el mensaje de verificación.');
        });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (

<RegisterContainer>
    
      <Title>Registro</Title>
      
      <Formulario onSubmit={handleRegister}>
        <Labels>
          Correo electrónico:
          <Inputs
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Labels>
        <Labels>
          Contraseña:
          <Inputs
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Labels>
        <StyledButton type="submit">Registrarse</StyledButton>
        {error && <p>{error}</p>}
      </Formulario>
      </RegisterContainer>
    
  );
 
};

export default Register;