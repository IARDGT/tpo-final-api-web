import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { uploadProfileImage, updateProfileImage } from "../controller/user.controller";

export const ProfileCard = ({userId, name, email, titulo, date, 
  exp, telefono, imgUrl}) => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [file, setFile] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSelectFile = (e) => setFile(e.target.files[0]);

    
    const uploadImage = async () => {
      const data = new FormData();
      data.append("my_img", file);
      data.append("userId", userId);
      let uploadRes = await uploadProfileImage(data); 
      console.log("uploadRes", uploadRes);
      return uploadRes;
    }

    const updateUser = async (id, imgUrl) => {
      let updateRes = await updateProfileImage(id, imgUrl); 
      console.log("updateUser Res", updateRes);
      return updateRes;
    }


    const handleUpload = async () => {
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
                              onChange={handleSelectFile}
                              multiple={false}
                            />
                            <button onClick={handleUpload} className="btn-green">
                              {loading ? <FontAwesomeIcon icon={faSpinner} spin />: <FontAwesomeIcon icon={faUpload} />}
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 px-xl-10">
                        <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                            <h3 className="h2 text-white mb-0">{name}</h3>
                            <span className="text-primary">{titulo}</span>
                        </div>
                        <ul className="list-unstyled mb-1-9">
                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Titulo:</span> {titulo}</li>
                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Experiencia:</span> {exp + ' años'}</li>
                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email:</span> {email}</li>
                            <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Fecha:</span> {date}</li>
                            <li className="display-28"><span className="display-26 text-secondary me-2 font-weight-600">Telefono:</span> {telefono}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfileCard;
