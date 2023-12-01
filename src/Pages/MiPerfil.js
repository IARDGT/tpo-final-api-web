import { useEffect, useState } from 'react';
import { ProfileCard } from "../components/ProfileCard";
import { useAuth } from '../components/AuthContext';
import { getUserDetails } from '../controller/user.controller';
import "./style/MiPerfil.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const MiPerfil = () => {
  const { auth, userId } = useAuth();
  const [profesor, setProfesor] = useState({
    id: userId,
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan@gmail.com',
    subject: 'Matemáticas',
    bio: 'Apasionado por enseñar matemáticas y ayudar a los estudiantes a entender conceptos complejos. Con experiencia tanto en aplicaciones teóricas como prácticas de las matemáticas.',
    imageUrl: 'https://res.cloudinary.com/dtjbknm5h/image/upload/v1701308009/samples/people/smiling-man.jpg'
});


  useEffect(() => {
    
    const getInfoProfesor = async (id) => {
      try {
        console.log("GET INFO PROFE DE ID: ", id);
        const res = await getUserDetails(id);
        console.log("RESPONSE DE PROFE: ", res)
        setProfesor(res.data);
      } catch (error) {
        console.error('Error al obtener datos del catálogo:', error);
      }
    };
    getInfoProfesor(userId);
  }, []);


  return (
    <div className="container bg-light">
        <div className="row">
            <div className="col-lg-12 mb-4 mb-sm-5">
              <ProfileCard 
                userId={profesor.id}
                name={profesor.name + ' ' + profesor.lastName}
                email={profesor.email}
                imageUrl={profesor.imageUrl}
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
