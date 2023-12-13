import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import './style/Recuperar.css';
import { recuperar } from "../controller/user.controller";


export const Recuperar = () => {
  
  const [email,setEmail] = React.useState('');
  const navigate = useNavigate();

  const handleEmail = (event) => {
      setEmail(event.target.value);
  }
  
  const handleRecuperar = async (e) => {
    e.preventDefault();
    let response = await recuperar(email); 
    if (response.ok) {
      navigate("/login");
    } else {
      alert("El usuario no es válido");
    }

  } 

  return (
    <div className="d-flex justify-content-center border rounded bg-body-tertiary recuperar-container" >
      <form>
        <h1 className="text-4xl xl:text-6xl text-center font-[600] text-ct-yellow-600 my-4">
          Recuperar Contraseña
        </h1>
        <div className="form-outline">
          <input type="text"
            id="formEmail"  
            className="form-control form-control-lg"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => handleEmail(e)}
          />
        </div>

        <div className="mt-4 pt-2 text-center">
          <button type="submit" 
            className="btn btn-primary btn-lg"
            onClick={(e) => handleRecuperar(e)}>
              Enviar Código
          </button>

          <p className="small fw-bold mt-2 pt-1 mb-4">¿No tenés una cuenta? <a href="/register"
            className="link-danger">¡Registrate!</a></p>
        </div>

      </form>
    </div>
  );
};
  
export default Recuperar;


