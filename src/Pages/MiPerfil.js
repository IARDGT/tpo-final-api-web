import { useParams } from 'react-router-dom';
import { ProfileCard } from "../components/ProfileCard";
import "./style/MiPerfil.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const MiPerfil = () => {
  const { id } = useParams();

  const profesor = {
    id: id,
    name: 'Juan Pérez',
    email: 'juan@gmail.com',
    subject: 'Matemáticas',
    bio: 'Apasionado por enseñar matemáticas y ayudar a los estudiantes a entender conceptos complejos. Con experiencia tanto en aplicaciones teóricas como prácticas de las matemáticas.',
    imageUrl: 'https://res.cloudinary.com/dtjbknm5h/image/upload/v1701308009/samples/people/smiling-man.jpg'
  };

  return (
    <div className="container bg-light">
        <div className="row">
            <div className="col-lg-12 mb-4 mb-sm-5">
              <ProfileCard 
                name={profesor.name}
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
