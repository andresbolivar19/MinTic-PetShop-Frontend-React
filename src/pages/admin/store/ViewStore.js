import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import APIInvoke from '../../../utils/APIInvoke'

const ViewStore = () => {

    const { id } = useParams();

    const [ store, setStore ] = useState(
        {
            _id: '',
            idPet:'',
            quantity:'',
            address:'',
            price:'',
            status:'',
            user: ''
        }
    )

    const { _id, idPet, quantity, address, price, status, user } = store;

    useEffect( () => { 

        async function loadStore(){
            const response = await APIInvoke.invokeGET(`/store/${id}`);
            setStore(response);
            return;
        }

        loadStore();
        document.getElementById("idPet").focus(); 
    },[] );

    return (
        <div className='wrapper'>
    
            <Navbar></Navbar>
            <Sidebar></Sidebar>
    
            <div className='content-wrapper'> 
            
                <Header
                title={"View store"}
                module={"Stores"}
                ></Header>
                
                <section className="content">
                    <div>
                        <div className="row">
                            <div className="offset-2 col-md-8">

                                <div className="card card-primary">

                                    <div className="card-header">
                                        <h3 className="card-title">Store info </h3>
                                    </div>
                                    <div className="card-body">

                                    <div className="form-group">
                                            <label htmlFor="title">Store ID</label>
                                            <input type="text" disabled
                                            id="idPet" 
                                            name="idPet" 
                                            value={ idPet }
                                            className="form-control"
                                            required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="title">Store quantity</label>
                                            <textarea id="quantity" name="quantity" disabled 
                                            className="form-control" 
                                            value={ quantity }
                                            required/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="title">Store address</label>
                                            <input type="text" disabled
                                            id="address" 
                                            name="address" 
                                            value={ address }
                                            className="form-control"
                                            required />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="price">Store price</label>
                                            <input id="price" name="price" disabled 
                                            className="form-control custom-select"
                                            value={ price }
                                            required >
                                            </input>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="status">Status</label>
                                            <input id="status" name="status" disabled 
                                            className="form-control custom-select"
                                            value={ status }
                                            required >
                                            </input>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="title">Store user</label>
                                            <input type="text" disabled
                                            id="user" 
                                            name="user" 
                                            value={ user }
                                            className="form-control"
                                            required />
                                        </div>
                        
                                        <div className="offset-4 col-md-4">
                                            <Link to={"/admin/stores"} className="btn btn-secondary">Cancel</Link>
                                            &nbsp;
                                            <Link to={`/admin/stores/edit/${id}`} className="btn btn-warning"> Edit </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                            
                    </div>
                    
                </section>
    
            </div>
    
            <Footer></Footer>
    
        </div>
    )
}

export default ViewStore
