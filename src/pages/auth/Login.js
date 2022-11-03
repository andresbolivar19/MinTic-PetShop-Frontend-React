import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import APIInvoke from '../../utils/APIInvoke';


const Login = () => {

    // Codigo para los hooks
    
    const navigate = useNavigate();

    const [ user, setUser ] = useState(
        {
            email: '',
            password: ''
        }
    );

    let auth = false;

   //Asiganacion multiple
   const { email, password } = user;

    // Que pasa cuando estos elementos cambien en el formulario
    const onChange = (event) => {
        setUser(
            {
                // Para usar todos los elementos del arreglo
                ...user,
                // Dependiendo de quien genero el evento envia la data
                [ event.target.name ] : event.target.value
            }
        );
    }

    // Para que envie los datos al back
    const login = async () => {
        const data = {
            email: user.email,
            password: user.password
        }
        const response = await APIInvoke.invokePOST('/auth/login', data);
        
        if( response.message === "Invalid credentials" ){
            swal({
                title: "Invalid user",
                icon: "error",
                text: "You dont have an account",
                dangerMode: true,
                buttons: {
                    confirm:{
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });

        } else if ( response.message === "Invalid password" ){
            swal({
                title: "Incorrect Password",
                icon: "error",
                text: "Your password is incorrect",
                dangerMode: true,
                buttons: {
                    confirm:{
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });

        } else if ( response.message === "Authentication successful" ){
            // Para que envie el usario y token
            localStorage.setItem('loggedUser', response.data);
            localStorage.setItem('token', response.token);
            
            navigate('/profile');

            console.log("TOKEN: " + response.token);
            console.log("loggedUser: " + response.loggedUser);

        } else {
            swal({
                title: "Unknown error",
                icon: "error",
                text: "Unknown error",
                dangerMode: true,
                buttons: {
                    confirm:{
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        login();
    }; 
    useEffect( () => {
        document.getElementById("email").focus();
    } , []);



    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link to={"#"} className="h1"><b>Log in</b></Link>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        
                        <form onSubmit={ onSubmit }>

                            <div className="input-group mb-3">
                                
                                <input type="email" 
                                className="form-control" 
                                placeholder="Email" 
                                id="email"
                                name="email"
                                // Para guardar el valor en la variable
                                value={ email }
                                onChange={ onChange }
                                required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" 
                                className="form-control" 
                                placeholder="Password"
                                id="password"
                                name="password"
                                // Para guardar el valor en la variable
                                value={ password }
                                onChange={ onChange }
                                required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                
                            <div className="social-auth-links text-center mt-2 mb-3">
                                <button type="submit" className="btn btn-block btn-primary">
                                    Log in 
                                </button>
                                <Link to={"/register"} className="btn btn-block btn-success">
                                    Register
                                </Link>
                            </div>

                        </form>
                    
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Login;
