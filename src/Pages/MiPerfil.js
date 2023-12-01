import { useEffect, useState } from 'react';
import { ProfileCard } from "../components/ProfileCard";
import { useAuth } from '../components/AuthContext';
import { getUserDetails } from '../controller/user.controller';
import "./style/MiPerfil.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const getInfoProfesor = async (id) => {
  try {
    const res = await getUserDetails(id);
    return res.data;
  } catch (error) {
    console.error('Error al obtener datos del catálogo:', error);
  }
};

export const MiPerfil = () => {
  const { auth, userId } = useAuth();
  const [profesor, setProfesor] = useState(getInfoProfesor(userId));
  

  useEffect(() => {
    getInfoProfesor(userId).then(user => {
      console.log(user);
      setProfesor(user);
    }).catch( err =>
      console.error(err)
    );
  }, [userId]);

  const formatISODateToDDMMYYYY = (isoDateString) => {
      const date = new Date(isoDateString);

      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // El mes es indexado desde 0, así que sumamos 1
      const year = date.getFullYear();

      return day+"-"+month+"-"+year;
  }


  return (
    <div className="container bg-light">
        <div className="row">
            <div className="col-lg-12 mb-4 mb-sm-5">
              <ProfileCard 
                userId={userId}
                name={profesor.name + ' ' + profesor.lastName}
                email={profesor.email}
                titulo={profesor.titulo}
                date={formatISODateToDDMMYYYY(profesor.date)}
                exp={profesor.exp}
                telefono={profesor.telefono}
                imgUrl={profesor.imgUrl}
                />
            </div>
            <div className="col-lg-12 mb-4 mb-sm-5">
                <div>
                    <span className="section-title text-primary mb-3 mb-sm-4">Biografía</span>
                    <p>{profesor.bio}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MiPerfil;
