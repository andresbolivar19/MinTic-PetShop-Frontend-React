import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import APIInvoke from '../../../utils/APIInvoke';

const CreateUser = () => {

    const navigate = useNavigate();

    const [ user, setUser ] = useState(
        {
            name: '',
            email: '',
            password: '',
            confirm: ''
        }
    );

    const { name, email, password, confirm } = user;

    const onChange = (event) => {
        setUser(
            {
                ...user,
                [ event.target.name ] : event.target.value
            }
        );
    }

    const saveUser = async () => {

        if( password !== confirm ){

            swal({
                title: 'Error',
                icon: 'error',
                text: 'Passwords must match',
                buttons:{
                    confirm:{
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });

        }else{

            const body = {
                name: user.name,
                email: user.email,
                password: user.password 
            }

            const response = await APIInvoke.invokePOST(`/user/save`, body );

            if ( response.message === 'User is already registered' ){
                
                swal({
                    title: 'User exists!',
                    icon: 'warning',
                    text: 'User is already registered',
                    buttons:{
                        confirm:{
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-warning',
                            closeModal: true
                        }
                    }
                });
    
            } else {

                swal({
                    title: 'User created!',
                    icon: 'success',
                    text: 'User registered successfully',
                    buttons:{
                        confirm:{
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-success',
                            closeModal: true
                        }
                    }
                }).then(
                    navigate('/admin/users')
                );

                setUser(
                    {
                        name: '',
                        email: '',
                        password: '',
                        confirm: ''
                    }
                );

            }

        }

    }

    useEffect( () => {
        document.getElementById("name").focus();
    } , []);

    const onSubmit = (event) => {
        event.preventDefault();
        saveUser();
    } 

    return (
        <div className='wrapper'>
    
            <Navbar></Navbar>
            <Sidebar></Sidebar>
    
            <div className='content-wrapper'> 
            
                <Header
                title={"Create user"}
                module={"user"}
                ></Header>
                
                <section className="content">
                <form onSubmit={ onSubmit } >
                    <div>
                        <div className="row">
                            <div className="offset-2 col-md-8">

                                <div className="card card-primary">

                                    <div className="card-header">
                                        <h3 className="card-title">Create new User</h3>
                                    </div>
                                    <div className="card-body">

                                        <div className="form-group">
                                            <label htmlFor="name">User name</label>
                                            <input type="text" 
                                            id="name" 
                                            name="name" 
                                            value={ name }
                                            onChange = { onChange }
                                            className="form-control"
                                            required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">User email</label>
                                            <input type="text" id="email" name="email" 
                                            className="form-control" 
                                            value={ email }
                                            onChange = { onChange }
                                            required/>
                                        </div>
                             
                                        <div className="form-group">
                                            <label htmlFor="password">User password</label>
                                            <input type="password" id="password" name="password" 
                                            className="form-control" 
                                            value={ password }
                                            onChange = { onChange }
                                            required/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="confirm">Confirm password</label>
                                            <input type="password" id="confirm" name="confirm" 
                                            className="form-control" 
                                            value={ confirm }
                                            onChange = { onChange }
                                            required/>
                                        </div>
                        
                                        <div className="offset-4 col-md-4">
                                            <Link to={"/admin/posts"} className="btn btn-secondary">Cancel</Link>
                                            &nbsp;
                                            <button type='submit' className="btn btn-success"> Create </button>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                            
                    </div>
                </form>
                    
                </section>
    
            </div>
    
            <Footer></Footer>
    
        </div>
    )
}

export default CreateUser
