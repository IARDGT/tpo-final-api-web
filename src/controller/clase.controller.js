import urlWebServices from './webServices.js';
import axios from "axios";

export const getClase = async function (idClase) {
    let url = `${urlWebServices.verClase}${idClase}`;

    try {
        let response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Origin': 'http://localhost:3000',
              'Content-Type': 'application/json'
            },
          });
        let data = await response.json();
        
        console.log('response',data)
        if (response.ok) {
            console.log('salio bien')
        }
        return data.clase;
    }
    catch (error) {
        console.log("error", error);
    };
}

export const getCatalogo = async function () {
    let url = urlWebServices.catalogo;

    try {
        let response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/json'
            },
        });
        let data = await response.json();

        if (response.ok) {
            console.log('salio bien')
        }
        return data.clases;

        
    }
    catch (error) {
        console.log("error", error);
    };
}

export const getMisClases = async function (idProfesor) {
    let url = `${urlWebServices.misClases}${idProfesor}`;
    
    try {
        let response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/json'
            },
        });
        let data = await response.json();

        if (response.ok) {
            console.log('salio bien')
        }
        return data.clases;

        
    }
    catch (error) {
        console.log("error", error);
    };
}

export const updateStatusComentario = async function (commentId, statusComentario) {
    let url = `${urlWebServices.updateComentario}${commentId}`;

    console.log('url comentario',url);
    console.log('statusComentario comentario',statusComentario);

    try {
        let response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({statusComentario: !statusComentario})
        });
        let data = await response.json();
        return data.clases;

        
    }
    catch (error) {
        console.log("error", error);
    };

    
}

export const uploadClaseImage = async function (img) {
    let url = urlWebServices.uploadClaseImage;
    console.log("url ", url);
    try {
        console.log("img ", img);
        let response = await axios.post(url, img);
        return response;
    }
    catch (error) {
        console.log("error", error);
    };
}

export const createClase = async function (clase) {
    let url = urlWebServices.crearClase;

    const jsonData = { 
            title: clase.title,
            profesorId: clase.profesorId,
            category: clase.category,
            tipoClase: clase.tipoClase,
            frecuencia: clase.frecuencia,
            duracion: clase.duracion,
            description: clase.description,
            price: clase.price,
            imgUrl: clase.imgUrl,
//            commentId: clase.commentId,
        };

    try {
        console.log("URL de crear clase ", url);
        console.log("jsonData ", jsonData);
        let response = await fetch(url, {
            method: 'POST',
            mode: "cors",
            headers: {
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData), // Convert JSON data to a string
        });

        return response;
    }
    catch (error) {
        console.log("error", error);
    };
}
