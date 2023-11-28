import urlWebServices from './webServices.js';

export const login = async function (email, password) {
    let url = urlWebServices.login;
    const jsonData = {
        email: email,
        password: password,
    };

    try {
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

        let status = response.status;
        let data = await response.json();
        if (response.ok) {
            let user = data.loginUser.user;
            sessionStorage.setItem("x", data.loginUser.token);
            sessionStorage.setItem("name", user.name);
            sessionStorage.setItem("email", user.email);
            //alert("SUCCESSFUL LOGIN.")
        } 
        return response;      
    }
    catch (error) {
        console.log("error", error);
    };
}

export const register = async function (register) {
    let url = urlWebServices.register;
    const jsonData = {
        name: register.name,
        lastName: register.lastName,
        email: register.email,
        password: register.password,
    };

    try {
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