const urlApi = "http://localhost:4000/";
//console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    register:urlApi +"api/users/registration",
    catalogo:urlApi+"api/clase/catalogo",
    verClase:urlApi+"api/clase/ver-clase/",
   
}

export default urlWebServices;