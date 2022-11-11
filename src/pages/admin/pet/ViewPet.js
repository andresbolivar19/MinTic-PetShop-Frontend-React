import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import APIInvoke from '../../../utils/APIInvoke'

const ViewPet = () => {

    const { id } = useParams();

    const [ pet, setPet ] = useState(
        {
            _id: '',
            category:'',
            name:'',
            photoUrls:'',
            status: '',
            user: ''
        }
    )

    const { _id, category, name, photoUrls, status, user } = pet;

    useEffect( () => { 

        async function loadPet(){
            const response = await APIInvoke.invokeGET(`/pet/${id}`);
            setPet(response);
            return;
        }

        loadPet();
        document.getElementById("name").focus(); 
    },[] );

    return (
        <div className='wrapper'>
    
            <Navbar></Navbar>
            <Sidebar></Sidebar>
    
            <div className='content-wrapper'> 
            
                <Header
                title={"View pet"}
                module={"Pets"}
                ></Header>
                
                <section className="content">
                    <div>
                        <div className="row">
                            <div className="offset-2 col-md-8">

                                <div className="card card-primary">

                                    <div className="card-header">
                                        <h3 className="card-title">Pet info </h3>
                                    </div>
                                    <div className="card-body">

                                    <div className="form-group">
                                            <label htmlFor="title">Pet ID</label>
                                            <input type="text" disabled
                                            id="id" 
                                            name="id" 
                                            value={ _id }
                                            className="form-control"
                                            required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="title">Pet category</label>
                                            <input type="text" disabled
                                            id="category" 
                                            name="category" 
                                            value={ category }
                                            className="form-control"
                                            required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="title">Pet name</label>
                                            <textarea id="name" name="name" disabled 
                                            className="form-control" 
                                            rows={4} 
                                            value={ name }
                                            required/>
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
                                            <label htmlFor="status">photoUrls</label>
                                            <input id="status" name="status" disabled 
                                            className="form-control custom-select"
                                            value={ photoUrls }
                                            required >
                                            </input>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="title">Pet user</label>
                                            <input type="text" disabled
                                            id="user" 
                                            name="user" 
                                            value={ user }
                                            className="form-control"
                                            required />
                                        </div>
                        
                                        <div className="offset-4 col-md-4">
                                            <Link to={"/admin/pets"} className="btn btn-secondary">Cancel</Link>
                                            &nbsp;
                                            <Link to={`/admin/pets/edit/${id}`} className="btn btn-warning"> Edit </Link>
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

export default ViewPet
