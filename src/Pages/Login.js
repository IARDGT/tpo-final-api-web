import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import './style/Login.css';
import { login } from "../controller/user.controller";


export const Login = () => {
  
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const { setAuth, setUserId } = useAuth();
  const navigate = useNavigate();

  const handleEmail = (event) => {
      setEmail(event.target.value);
  }
  const handlePassword = (event) => {    
      setPassword(event.target.value);
  }
  
  const validate_login = () => {    
    return true;
  }
  
  
  const handleLogin = async (e) => {
    e.preventDefault();
    let isValid = validate_login();
    if (!isValid) {return undefined;}

    let response = await login(email, password); 
    if (response.ok) {
      setAuth(true);
      console.log("sessionStorage.getItem(userId) ",sessionStorage.getItem("userId"))
      setUserId(sessionStorage.getItem("userId"));
      navigate("/");
    } else {
      alert("El usuario no es válido");
    }

  } 


  return (
    <div className="row d-flex justify-content-center border rounded bg-body-tertiary login-container" >
      <div className="col-lg-7 login-vitrina text-white" >
        <h2>¡Bienvenido de nuevo!</h2>
        <p>
          Si eres uno de nuestros valiosos profesores, estás a solo un paso de comenzar a impartir clases. Inicia sesión en
          tu cuenta para acceder a todas las herramientas y recursos que necesitas para conectar con estudiantes y
          compartir tus conocimientos de manera efectiva. ¡Es hora de inspirar y empoderar a tus alumnos a través de
          nuestra plataforma! Haz clic en 'Iniciar sesión' y comienza tu próxima sesión de enseñanza."
        </p>
      </div>
      <div className="col-lg-5 d-flex justify-content-center">
        <form>
          <h3 className="d-flex justify-content-center mt-4">Iniciar sesión</h3>

          <div className="form-outline mb-4">
            <input type="text"
              id="formEmail"
              className="form-control form-control-lg"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => handleEmail(e)}
            />
          </div>

          <div className="form-outline mb-3">
            <input type="password"
              id="formPassword"
              className="form-control form-control-lg"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => handlePassword(e)}
            />
          </div>

          <div className="d-flex justify-content-end">
            <a href="/recuperar" className="text-body">¿Olvidaste tu contraseña?</a>
          </div>

          <div className="js mt-4 pt-2">
            <button type="submit" 
              className="btn btn-primary btn-lg"
              onClick={(e) => handleLogin(e)}>
                Continuar
            </button>

            <p className="small fw-bold mt-2 pt-1 mb-4">¿No tenés una cuenta? <a href="/register"
              className="link-danger">¡Registrate!</a></p>
          </div>

        </form>
      </div>
    </div>
  );
};
  
export default Login;


