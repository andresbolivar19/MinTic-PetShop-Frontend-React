import React, { useEffect, useState } from 'react';
import APIInvoke from '../../utils/APIInvoke';


const Profile = () => {

    const user = localStorage.getItem("loggedUser");
    const token = localStorage.getItem("token");

    const loadProfile = async () => {
        const response = await APIInvoke.invokePOST('/auth/test', {});
        return response.data.email;
    }

    useEffect( () => {
        async function fetchData() {
            document.getElementById("user").innerHTML = await loadProfile();
        }
        fetchData();
    }, []);

    return (
        <div className="hold-transition login-page">
            Hello <span id="user"></span>
        </div>
    );
}

export default Profile;
