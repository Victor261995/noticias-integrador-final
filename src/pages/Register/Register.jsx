import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, sendEmailVerification } from "../../firebase/firebase-utils";
import { RegisterContainer } from "./RegisterContainer";
import { formContainer} from "./RegisterContainer";

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
    
      <h2>Registro</h2>
      <formContainer>
      <form onSubmit={handleRegister}>
        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Registrarse</button>
        {error && <p>{error}</p>}
      </form>
      </formContainer>
    </RegisterContainer>
  );
 
};

export default Register;