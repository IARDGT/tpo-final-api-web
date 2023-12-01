import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
      <footer className="bg-body-tertiary">
        <hr className="mt-5 mb-4 " />
        <div className="container mx-auto ">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <a href="/">
                <img src={ require('../assets/logo.png') } alt="Logo" width="30" height="24"></img>
              </a>
            </div>
            <div className="col-8 d-flex justify-content-center">
              <ul className="nav">
                <li className="nav-item"><a href="#" className="nav-link px-2">Inicio</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2">¿Quienes Somos?</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2">Encontrá tu clase</a></li>
              </ul>
            </div>
            <div className="col d-flex justify-content-center">
              <ul className="nav">
              <li className="nav-item">
                    <a href="#" className="btn btn-outline-dark btn-circle social-fb">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="btn btn-outline-dark btn-circle social-ig">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="btn btn-outline-dark btn-circle social-tw">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
//export default Footer;