import { useState } from 'react';
import { PasosClase } from '../components/PasosClase';
import { register } from "../controller/user.controller";

import './style/Register.css';
import { useNavigate } from 'react-router-dom';



export const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    let response = await register(nombre,apellido,email,password);
    console.log("response.ok ",response.ok)
    if (!response.ok) {
      alert("Error creating user.")
    } else {
      alert("User created. Please login now.")
      return navigate("/login");
    }

  }

  return (
    <>
      <div className="signup-container">
        <div className="row d-flex justify-content-center align-items-center border rounded bg-body-tertiary">
          <div className="col-lg-7 signup-vitrina text-white">
            {/* <img src={require('../assets/login_img2.jpg')} className="img-fluid" alt="Sample image" />  */}
            <h2>¡Comparte al mundo tu conocimiento!</h2>
            <p> Buscamos profesores apasionados y dedicados como vos para unirse a nuestra creciente comunidad en línea
              de educadores. Únete a nosotros hoy y sé parte de una plataforma que valora y recompensa tu compromiso
              con la enseñanza. </p>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <form>
              <h3 className="d-flex justify-content-center mt-4 mb-3 ">¡Creá tu usuario de profesor!</h3>

              {/* Nombre */}
              <div className="form-outline mb-4">
                <input type="text"
                  id="formNombre"
                  className="form-control form-control-lg"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              {/* Apellido */}
              <div className="form-outline mb-4">
                <input type="text"
                  id="formApellido"
                  className="form-control form-control-lg"
                  placeholder="Apellido"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="form-outline mb-4">
                <input type="text"
                  id="formEmail"
                  className="form-control form-control-lg"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Correo electrónico"
                />
              </div>

              {/* Password */}
              <div className="form-outline mb-3">
                <input type="password"
                  id="formPassword"
                  className="form-control form-control-lg"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Boton registrate */}
              <div className="js mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg"
                  onClick={(e) => handleSubmit(e)}> Registrate </button>
                <p className="small fw-bold mt-2 pt-1 mb-4">¿Ya tenés una cuenta? <a href="/login"
                  className="link-danger">¡Ingresá!</a></p>
              </div>

            </form>
          </div>

        </div>
        <PasosClase />

      </div>

    </>
  );
};

export default Register;
