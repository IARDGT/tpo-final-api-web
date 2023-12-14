import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import './style/RecuperarForm.css';
import { updatePassword, updateProfile } from "../controller/user.controller";


export const RecuperarForm = () => {
  const { id } = useParams();
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    let req = {
      id: id,
      password: password
    }
    console.log(req)
    let response = await updateProfile(req); 
    if (response.ok) {
      navigate("/login");
    } else {
      console.log(response)
      alert("El usuario no es válido");
    }

  } 

  return (
    <div className="d-flex justify-content-center border rounded bg-body-tertiary recuperar-container" >
      <form>
        <h1 className="text-4xl xl:text-6xl text-center font-[600] text-ct-yellow-600 my-4">
          Recuperación de Usuario
        </h1>
        <div className="form-outline">
          <input type="password"
            id="formEmail"  
            className="form-control form-control-lg"
            placeholder="Nueva Contraseña"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
        </div>

        <div className="mt-4 pt-2 text-center">
          <button type="submit" 
            className="btn btn-primary btn-lg"
            onClick={(e) => handleUpdatePassword(e)}>
              Cambiar Contraseña
          </button>

          <p className="small fw-bold mt-2 pt-1 mb-4">¿No tenés una cuenta? <a href="/register"
            className="link-danger">¡Registrate!</a></p>
        </div>

      </form>
    </div>
  );
};
  
export default RecuperarForm;


