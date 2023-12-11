import urlWebServices from './webServices.js';

export const getClaseContratada = async function (idClase) {
    let url = `${urlWebServices.verClaseContratada}${idClase}`;

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
        
        //console.log('response',data)
        return data.claseContratada        ;
    }
    catch (error) {
        console.log("error", error);
    };
}

export const getListaClaseContratada = async function (idProfesor) {
    let url = `${urlWebServices.misClasesContratadas}${idProfesor}`;
    
    //console.log('url----------------->',url)
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


        //console.log('data.claseContratadas---------------->',data.claseContratadas)
        return data.claseContratadas;

        
    }
    catch (error) {
        console.log("error", error);
    };
}

export const updateStatusComentario = async function (commentId, statusComentario) {
    let url = `${urlWebServices.updateComentario}${commentId}`;

    /* console.log('url comentario',url);
    console.log('statusComentario comentario',statusComentario); */

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

export const updateStatusClase = async function (claseContratada, statusClaseContratada) {
    let url = `${urlWebServices.updatestatusClaseContratada}${claseContratada}`;

    //console.log('url claseContratada status',url);
    //console.log('statusClaseContratada claseContratada status',statusClaseContratada);

    try {
        let response = await fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({statusClaseContratada: statusClaseContratada})
        });
        let data = await response.json();
        return data.clases;
        
    }
    catch (error) {
        console.log("error", error);
    };
}