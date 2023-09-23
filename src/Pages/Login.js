import * as React from 'react';
import './Login.css';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Login = () => {
    return (
      <>
      <Navbar />
      <div className="row d-flex mx-5 justify-content-center align-items-center border border-dark">
        <div className="col-lg-7 ">
           {/* <img src={require('../assets/login_img2.jpg')} className="img-fluid" alt="Sample image" />  */}
           <h2>¡Bienvenido de nuevo!</h2>
           <p>
              Si eres uno de nuestros valiosos profesores, estás a solo
              un paso de comenzar a impartir clases. Inicia sesión en
              tu cuenta para acceder a todas las herramientas y
              recursos que necesitas para conectar con estudiantes y
              compartir tus conocimientos de manera efectiva. ¡Es
              hora de inspirar y empoderar a tus alumnos a través de
              nuestra plataforma! Haz clic en 'Iniciar sesión' y
              comienza tu próxima sesión de enseñanza."
            </p>
        </div>
        <div className="col-lg-5 d-flex justify-content-center">
          <form>
            <h3 className="d-flex justify-content-center mt-4">Iniciar sesión</h3>

            <div className="form-outline mb-4">
              <input type="email" id="formEmail" className="form-control form-control-lg"
                placeholder="Correo electrónico" />
            </div>

            <div className="form-outline mb-3">
              <input type="password" id="formPassword" className="form-control form-control-lg"
                placeholder="Contraseña" />
            </div>

            <div className="d-flex justify-content-end">
              <a href="#!" className="text-body">¿Olvidaste tu contraseña?</a>
            </div>

            <div className="js mt-4 pt-2">
              <button type="button" className="btn btn-primary btn-lg">Continuar</button>
              <p className="small fw-bold mt-2 pt-1 mb-4">¿No tenés una cuenta? <a href="#!"
                  className="link-danger">¡Registrate!</a></p>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </>
    );
  };
  
export default Login;
