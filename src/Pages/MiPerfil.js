import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { getUserDetails } from '../controller/user.controller';
import "./style/MiPerfil.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// Get User Info from MongoDB
const getInfoProfesor = async (profId) => {
  try {
    const res = await getUserDetails(profId);
    return res.data;
  } catch (error) {
    console.error('Error al obtener datos del catálogo:', error);
  }
};
// Helper Function to parse Date
const formatISODateToDDMMYYYY = (isoDateString) => {
  const date = new Date(isoDateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // El mes es indexado desde 0, así que sumamos 1
  const year = date.getFullYear();
  return day + "-" + month + "-" + year;
}

export const MiPerfil = () => {
  const { id } = useParams();
  const { auth, userId } = useAuth();
  const [profesor, setProfesor] = useState(getInfoProfesor(id));
  const navigate = useNavigate();

  useEffect(() => {
    getInfoProfesor(id).then(user => {
      console.log(user);
      setProfesor(user);
    }).catch(err =>
      console.error(err)
    );
  }, [id]);

  const isEditEnabled = () => {
    return (auth && userId == id) 
  }



  const navigateToEdit = () => {
    navigate('/mi-perfil/editar/' + id);
  }


  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-lg-12 mb-2 mb-sm-3">
          <div className="card card-style1 border-0">
            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img src={profesor.imgUrl}
                    className="img-fluid"
                    id='card-image'
                    style={{ height: "25rem", objectFit: "cover" }}
                    alt="..." />
                </div>
                <div className="col-lg-6 px-xl-10">
                  <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                    <h3 className="h2 text-white mb-0">{profesor.name + ' '+ profesor.lastName}</h3>
                    <span className="text-primary">{profesor.titulo}</span>
                  </div>
                  <ul className="list-unstyled mb-1-9">
                    <li className="display-26 mb-2 mb-xl-3 text-dark font-weight-500"> <span className="me-2 text-secondary font-weight-600">Titulo:</span> {profesor.titulo}</li>
                    <li className="display-26 mb-2 mb-xl-3 text-dark font-weight-500"> <span className="me-2 text-secondary font-weight-600">Experiencia:</span> {profesor.exp + ' años'}</li>
                    <li className="display-26 mb-2 mb-xl-3 text-dark font-weight-500"> <span className="me-2 text-secondary font-weight-600">Email:</span> {profesor.email}</li>
                    <li className="display-26 mb-2 mb-xl-3 text-dark font-weight-500"> <span className="me-2 text-secondary font-weight-600">Es profesor desde:</span> {formatISODateToDDMMYYYY(profesor.date)}</li>
                    <li className="display-26 mb-2 mb-xl-3 text-dark font-weight-500"> <span className="me-2 text-secondary font-weight-600">Telefono:</span> {profesor.telefono}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-4 mb-sm-5">
          <div>
            <span className="section-title text-primary mb-3 mb-sm-4">Biografía</span>
            <p>{profesor.bio}</p>
          </div>
        </div>
        { 
          isEditEnabled() && 
          <div className="col-lg-12 text-center mb-4 mb-sm-5">
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => navigateToEdit(e)}>
              Editar Perfil
            </button>
          </div>        
        }


      </div>
    </div>
  );
};

export default MiPerfil;
