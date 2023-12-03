import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { uploadProfileImage, updateProfileImage } from "../controller/user.controller";

// Upload Image to Cloudinary
const uploadImage = async (file, userId) => {
  const data = new FormData();
  data.append("my_img", file);
  data.append("userId", userId);
  let uploadRes = await uploadProfileImage(data); 
  console.log("uploadRes", uploadRes);
  return uploadRes;
}

// Update imgUrl in User
const updateUser = async (id, imgUrl) => {
  let updateRes = await updateProfileImage(id, imgUrl); 
  console.log("updateUser Res", updateRes);
  return updateRes;
}

export const ProfileCard = ({userId, name, email, titulo, date, 
  exp, telefono, imgUrl, isEdit}) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [file, setFile] = useState('');
  const [loading, setLoading] = useState(false);
  
  
  const handleImageUpload = (e) => {
    let newImage = e.target.files[0];
    setFile(newImage);
    let url = URL.createObjectURL(newImage);
    setUploadedImage(url);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      // uploadIMage
      let uploadRes = await uploadImage();
      let secureUrl = uploadRes.data.secure_url
      let updateRes = await updateUser(userId, secureUrl); 
      console.log("updateRes", updateRes);
      setUploadedImage(secureUrl);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };


    
    return (
      <>
      {
        !isEdit &&
        <div className="card card-style1 border-0">
            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <img src={`${uploadedImage===null ? imgUrl : uploadedImage}`} 
                          className="img-fluid"
                          id='card-image'
                          style={{ height: "25rem", objectFit: "cover"}}
                          alt="..."/>
                    </div>
                    <div className="col-lg-6 px-xl-10">
                        <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                            <h3 className="h2 text-white mb-0">{name}</h3>
                            <span className="text-primary">{titulo}</span>
                        </div>
                        <ul className="list-unstyled mb-1-9">
                            <li className="display-26 mb-2 mb-xl-3 text-dark font-weight-500"> <span className="me-2 text-secondary font-weight-600">Titulo:</span> {titulo}</li>
                            <li className="display-26 mb-2 mb-xl-3 text-dark font-weight-500"> <span className="me-2 text-secondary font-weight-600">Experiencia:</span> {exp + ' años'}</li>
                            <li className="display-26 mb-2 mb-xl-3 text-dark font-weight-500"> <span className="me-2 text-secondary font-weight-600">Email:</span> {email}</li>
                            <li className="display-26 mb-2 mb-xl-3 text-dark font-weight-500"> <span className="me-2 text-secondary font-weight-600">Es profesor desde:</span> {date}</li>
                            <li className="display-26 mb-2 mb-xl-3 text-dark font-weight-500"> <span className="me-2 text-secondary font-weight-600">Telefono:</span> {telefono}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      }
      {
        isEdit &&
        <div className="card card-style1 border-0">
            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <img src={`${uploadedImage===null ? imgUrl : uploadedImage}`} 
                          className="img-fluid img-crear-clase"
                          style={{ height: "25rem", objectFit: "cover"}}
                          alt="..."/>
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

                        <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded-pill">
                            <h3 className="h2 text-white mb-0">{name}</h3>
                            <span className="text-primary">{titulo}</span>
                        </div>

                        <div class="form-floating mb-2">
                          <input type="text" class="form-control" id="floatingTitulo" placeholder="name@example.com"/>
                          <label for="floatingTitulo">Titulo</label>
                        </div>
                            
                        <div class="form-floating mb-2">
                          <input type="number" class="form-control" id="floatingExp" placeholder="0"/>
                          <label for="floatingExp">Experiencia</label>
                        </div>

                        <div class="form-floating mb-2">
                          <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com"/>
                          <label for="floatingEmail">Email</label>
                        </div>

                        <div class="form-floating mb-2">
                          <input type="text" class="form-control" id="floatingTelefono" placeholder="name@example.com"/>
                          <label for="floatingTelefono">Telefono</label>
                        </div>

                        <button onClick={handleSubmit} className="border-0">
                              {loading ? <FontAwesomeIcon icon={faSpinner} spin />: <FontAwesomeIcon icon={faUpload} />}
                            </button>
                    </div>
                </div>
            </div>
        </div>
      }
      </>

    )
}


export default ProfileCard;
