const urlApi = "http://localhost:4000/";
//console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    register:urlApi +"api/users/registration",
    recuperar:urlApi +"api/users/reset-password",
    updatePassword:urlApi +"api/users/update",
    getUserById:urlApi +"api/users/userById",
    uploadProfileImage:urlApi +"api/users/image-upload",
    updateProfile:urlApi +"api/users/update",
    catalogo:urlApi+"api/clase/catalogo",
    listaComentarios:urlApi+"api/clase/lista-comentarios",
    verClase:urlApi+"api/clase/ver-clase/",
    updateComentario:urlApi+"api/clase/actualizar-comment/",
    misClases:urlApi+"api/clase/mis-clases/",
    crearClase:urlApi+"api/clase/crear-clase",
    eliminarClase:urlApi+"api/clase/borrar-clase/",
    uploadClaseImage:urlApi+"api/clase/image-upload",
    misClasesContratadas:urlApi+"api/clase-contratada/lista-clases-contratada/",
    verClaseContratada:urlApi+"api/clase-contratada/ver-clase-contratada/",
    updatestatusClaseContratada:urlApi+"api/clase-contratada/lista-clases-contratada-status/",
    contratarClase:urlApi+"api/clase-contratada/contratar/",
    comentarioCreate:urlApi+"api/clase/create-comment",
}

export default urlWebServices;