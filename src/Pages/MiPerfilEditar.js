import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../components/AuthContext';
import { getUserDetails } from '../controller/user.controller';
import { uploadProfileImage, updateProfile } from "../controller/user.controller";
import "./style/MiPerfil.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// Get User Info from MongoDB
const getInfoProfesor = async (id, token) => {
  try {
    const res = await getUserDetails(id, token);
    return res.data;
  } catch (error) {
    console.error('Error al obtener datos del catálogo:', error);
  }
};

// Upload Image to Cloudinary
const uploadImage = async (file, userId, token) => {
  const data = new FormData();
  data.append("my_img", file);
  data.append("userId", userId);
  let uploadRes = await uploadProfileImage(data, token);
  return uploadRes;
}

// Update imgUrl in User
const updateUser = async (req, token) => {
  let updateRes = await updateProfile(req, token);
  return updateRes;
}

// Update imgUrl in User
const defaultProfesor = {
  _id: "656957c5317bf2309c171a94",
  name: "Juan",
  lastName: "Perez",
  email: "juan.perez@gmail.com",
  date: "2023-12-01T03:49:25.133Z",
  password: "$2a$08$y9zs8Tw7sW4zgyA254R9puhQdlxpJZY8lr2PPQrt4lrYIZh66DQ.e",
  titulo: "Profesor",
  exp: 10,
  imgUrl: "https://res.cloudinary.com/dtjbknm5h/image/upload/v1701456977/basic-teacher_fojod3.png",
  telefono: 1155224433,
  bio: "Apasionado por enseñar para todos.",
}

export const MiPerfilEditar = () => {
  const { id } = useParams();
  const { token, userId } = useAuth();
  const [profesor, setProfesor] = useState(defaultProfesor);
  const [file, setFile] = useState('');
  const [loading, setLoading] = useState(false);
  const [titulo, setTitle] = useState(null);
  const [exp, setExp] = useState(null);
  const [email, setEmail] = useState(null);
  const [telefono, setTelefono] = useState(null);
  const [bio, setBio] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    getInfoProfesor(id, token).then(user => {
      setProfesor(user);
    }).catch(err =>
      console.error(err)
    );
  }, [id, token]);


  const navigateToPerfil = () => {
    navigate('/mi-perfil/' + id);
  }

  const handleImageUpload = (e) => {
    let newImage = e.target.files[0];
    setFile(newImage);
    let url = URL.createObjectURL(newImage);
    setUploadedImage(url);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Upload Image to Cloudinary
      let secureUrl;
      if (uploadedImage) {
        let uploadRes = await uploadImage(file, userId, token);
        secureUrl = uploadRes.data.secure_url
      }

      // Update User
      let req = { id: userId };
      if (titulo) req.titulo = titulo;
      if (exp) req.exp = exp;
      if (email) req.email = email;
      if (telefono) req.telefono = telefono;
      if (bio) req.bio = bio;
      if (uploadedImage) req.imgUrl = secureUrl;

      console.log("tu request ES: ", req);
      let updateRes = await updateUser(req, token);
      console.log("updateRes", updateRes);
      navigate("/mi-perfil/" + userId);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-lg-12 mb-4 mb-sm-5">
          <div className="card card-style1 border-0">
            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img src={`${uploadedImage === null ? profesor.imgUrl : uploadedImage}`}
                    className="img-fluid"
                    style={{ height: "25rem", objectFit: "cover" }}
                    alt="..." />
                  <div className="input-group mb-3">
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      id="imageUpload"
                      onChange={handleImageUpload}
                      multiple={false}
                    />
                  </div>
                </div>
                <div className="col-lg-6 px-xl-10">

                  <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                    <h3 className="h2 text-white mb-0">{profesor.name + ' ' + profesor.lastName}</h3>
                    <span className="text-primary">{profesor.titulo}</span>
                  </div>

                  <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="floatingTitulo" placeholder="Profesor" onChange={(e) => setTitle(e.target.value)} />
                    <label for="floatingTitulo">Titulo</label>
                  </div>

                  <div class="form-floating mb-2">
                    <input type="number" class="form-control" id="floatingExp" placeholder="0" onChange={(e) => setExp(e.target.value)} />
                    <label for="floatingExp">Experiencia</label>
                  </div>

                  <div class="form-floating mb-2">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                    <label for="floatingEmail">Email</label>
                  </div>

                  <div class="form-floating mb-2">
                    <input type="text" class="form-control" id="floatingTelefono" placeholder="1155559999" onChange={(e) => setTelefono(e.target.value)} />
                    <label for="floatingTelefono">Telefono</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 form-outline mb-3">
          <span className="section-title text-primary mb-3 mb-sm-4">Biografía</span>
          <textarea className="form-control form-control-lg" placeholder="Biografía" onChange={(e) => setBio(e.target.value)}></textarea>
        </div>

        <div className="col-lg-12 text-center mb-4 mb-sm-5">
          <div>
            <button
              onClick={handleSubmit}
              className="btn btn-primary me-md-2"
              type="button">
              {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : <span>Aceptar</span>}
            </button>

            <button onClick={handleSubmit} className="border-0">

            </button>

            <button
              type="button"
              className="btn btn-warning"
              onClick={(e) => navigateToPerfil(e)}>
              Cancelar
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MiPerfilEditar;
