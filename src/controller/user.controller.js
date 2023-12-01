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
    let url = urlWebServices.getUserById+"/"+userId;
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
            } 
        });
        
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log("error", error);
    };
}

export const uploadProfileImage = async function (img) {
    let url = urlWebServices.uploadProfileImage;
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

export const updateProfileImage = async function (userId, imgUrl) {
    let url = urlWebServices.updateProfileImage;
    let jsonData = {
        id: userId,
        imgUrl: imgUrl,
    };
    console.log("updateProfileImage: ");
    console.log("url ", url);
    console.log("jsonData ", jsonData);

    try {
        let response = await fetch(url, {
            method: 'PUT',
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