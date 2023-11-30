import urlWebServices from './webServices.js';
import axios from "axios";

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

        let data = await response.json();
        if (response.ok) {
            let user = data.loginUser.user;
            sessionStorage.setItem("x-access-token", data.loginUser.token);
            sessionStorage.setItem("userId", user._id); //// TO-DO
            sessionStorage.setItem("userName", user.name); //// TO-DO
            sessionStorage.setItem("userEmail", user.email); //// TO-DO
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

export const getUserDetails = async function (userId) {
    let url = urlWebServices.getUserById;
    const jsonData = {
        id: userId,
    };

    try {
        let response = await fetch(url, {
            method: 'GET',
            mode: "cors",
            headers: {
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData), // Convert JSON data to a string
        });
        
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log("error", error);
    };
}

export const uploadProfileImage = async function (data) {
    let url = urlWebServices.uploadProfileImage;

    try {
        /*let response = await fetch(url, {
            method: 'POST',
            mode: "cors",
            headers: {
                // 'x-access-token': WebToken.webToken,
                'Origin': 'http://localhost:3000'
            },
            body: data, // Convert JSON data to a string
        });*/
        let response = await axios.post(url, data);
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log("error", error);
    };
}