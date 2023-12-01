import urlWebServices from './webServices.js';

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

export const geCatalogo = async function () {
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