const urlApi = "http://localhost:4000/";
console.log("url",urlApi);

const urlWebServices = {
    login:urlApi +"api/users/login",
    register:urlApi +"api/users/registration",
   
}

export default urlWebServices;