const urlApi = "http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    register:urlApi +"api/users/registration",
    getUserById:urlApi +"api/users/getUserById",
    uploadProfileImage:urlApi +"api/users/image-upload",
   
}

export default urlWebServices;