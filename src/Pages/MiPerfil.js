import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const MiPerfil = () => {
  const { id } = useParams();

  const profesor = {
    id: id,
    name: 'Juan Pérez',
    subject: 'Matemáticas',
    bio: 'Apasionado por enseñar matemáticas y ayudar a los estudiantes a entender conceptos complejos. Con experiencia tanto en aplicaciones teóricas como prácticas de las matemáticas.',
    imageUrl: './assets/math-simple.jpg'
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <img src={profesor.imageUrl} alt={profesor.name} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{profesor.name}</h2>
          <p className="card-text">Materias: {profesor.subject}</p>
        </div>
      </div>  
      <div className="mt-4">
        <h3>Bio</h3>
        <p>{profesor.bio}</p>
      </div>
    </div>
  );
};

export default MiPerfil;
