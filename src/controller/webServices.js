const urlApi = "http://localhost:4000/";
//console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    register:urlApi +"api/users/registration",
    getUserById:urlApi +"api/users/userById",
    uploadProfileImage:urlApi +"api/users/image-upload",
    updateProfileImage:urlApi +"api/users/update",
    catalogo:urlApi+"api/clase/catalogo",
    verClase:urlApi+"api/clase/ver-clase/",
    updateComentario:urlApi+"api/clase/actualizar-comment/",
    misClases:urlApi+"api/clase/mis-clases/",
    crearClase:urlApi+"api/clase/crear-clase",
}

export default urlWebServices;