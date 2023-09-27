import * as React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const Register = () => {
    return (
      <>
      <Navbar />
      <div className="row d-flex mx-5 justify-content-center align-items-center border border-dark">
        <div className="col-lg-7 ">
           {/* <img src={require('../assets/login_img2.jpg')} className="img-fluid" alt="Sample image" />  */}
           <h2>¡Comparte al mundo tu conocimiento!</h2>
           <p> Buscamos profesores apasionados y dedicados como vos para unirse a nuestra creciente comunidad en línea
            de educadores. Únete a nosotros hoy y sé parte de una plataforma que valora y recompensa tu compromiso
            con la enseñanza. </p>
        </div>
        <div className="col-lg-5 d-flex justify-content-center">
          <form>
            <h3 className="d-flex justify-content-center mt-4 mb-3 ">¡Creá tu usuario de profesor!</h3>

            <div className="form-outline mb-4">
              <input type="nombre" id="formNombre" className="form-control form-control-lg"
                placeholder="Nombre" />
            </div>
            <div className="form-outline mb-4">
              <input type="apellido" id="formApellido" className="form-control form-control-lg"
                placeholder="Apellido" />
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="formEmail" className="form-control form-control-lg"
                  placeholder="Correo electrónico" />
            </div>
            <div className="form-outline mb-3">
              <input type="password" id="formPassword" className="form-control form-control-lg"
                placeholder="Contraseña" />
            </div>

            <div className="js mt-4 pt-2">
              <button type="button" className="btn btn-primary btn-lg">Registrate</button>
              <p className="small fw-bold mt-2 pt-1 mb-4">¿Ya tenés una cuenta? <a href="/login"
                  className="link-danger">¡Ingresá!</a></p>
            </div>

          </form>
        </div>
      </div>
      <h2>Pasos para iniciar tus clases</h2>

    </>
    );
  };
  
export default Register;
