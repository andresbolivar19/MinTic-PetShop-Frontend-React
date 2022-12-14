
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import APIInvoke from '../../../utils/APIInvoke'

const EditPet = () => {

    // Para cambiar de pagina, por ejemplo despues de guardar un pet
    let navigate = useNavigate();

     // Guarda el ID de la publicacion que se quiere editar
     const { id } = useParams();

    // No esta usuario por que en el backend petController.js envia el pet con el usuario logueado
    // Importante que los nombre definidos sean iguales a los que se penen en el campo del formulario para que funcione el onChange
    const [ pet, setPet ] = useState(
        {
            idPet:'',
            name:'',
            category:'',
            photoUrls:'',
            price:'',
            status:''
            
        }
    )

    // Variables para guardar el contenido del objeto pet
    const { _id, idPet, name, category, photoUrls, price, status, user } = pet;

    // Metodo onChange
    // "...pet" para que muestre todo el contenido del objeto y lo agrega como diccionario
    //[ e.target.name ] : e.target.value para adicionar lo que se pone por teclaro en el campo
    const onChange = (e) => { 
        setPet({
            ...pet,
            [ e.target.name ] : e.target.value
        });    
    }

    const onSubmit = (e) => { 
        e.preventDefault();
        savePet();
    }

    const savePet = async () => { 
        
        const data = {
            idPet: pet.idPet,
            category: pet.category,
            name: pet.name,
            photoUrls: pet.photoUrls,
            price: pet.price,
            status: pet.status
        }

        const response = await APIInvoke.invokePUT(`/pet/${id}`, data);

        if( response.message === "Pet updated" ){

            swal({
                title: 'Pet updated',
                icon: 'success',
                text: `Pet updated successfully`,
                buttons: {
                    confirm: {
                        text: 'Close',
                        value: true,
                        visible: true,
                        className: 'btn btn-success',
                        closeModal: true
                    }
                }
            }).then(
                navigate('/admin/pets')
            );

        }else{
            console.log(response.error)
            swal({
                title: 'Unknown error',
                icon: 'error',
                text: 'Unknown error',
                buttons: {
                    confirm: {
                        text: 'Close',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }

    }

    useEffect( () => { 
        async function loadPet(){
            const response = await APIInvoke.invokeGET(`/pet/${id}`);
            setPet(response);
            console.log(response);
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
                title={"Edit pet"}
                module={"pet"}
                ></Header>
                
                <section className="content">
                <form onSubmit={ onSubmit } >
                    <div>
                        <div className="row">
                            <div className="offset-2 col-md-8">

                                <div className="card card-primary">

                                    <div className="card-header">
                                        <h3 className="card-title">Edit Pet</h3>
                                    </div>
                                    <div className="card-body">

                                    <div className="form-group">
                                            <label htmlFor="idPet">Pet id</label>
                                            <input type="text" 
                                            id="idPet" 
                                            name="idPet" 
                                            value={ idPet }
                                            onChange = { onChange }
                                            required/>
                                    </div>

                                    <div className="form-group">
                                            <label htmlFor="name">Pet name</label>
                                            <input type="text" 
                                            id="name" 
                                            name="name" 
                                            value={ name }
                                            onChange = { onChange }
                                            required/>
                                    </div>

                                    <div className="form-group">
                                            <label htmlFor="category">Category</label>
                                            <select id="category" name="category" 
                                            className="form-control custom-select"
                                            value={ category }
                                            onChange = { onChange }
                                            required >
                                                <option value={""} defaultValue disabled>Select one</option>
                                                <option value={"Dogs"}> Dogs</option>
                                                <option value={"Cats"}> Cats</option>
                                                <option value={"Others"}> Others</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="photoUrls">Pet photoUrls</label>
                                            <input type="text" 
                                            id="photoUrls" 
                                            name="photoUrls" 
                                            value={ photoUrls }
                                            onChange = { onChange }
                                            required/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="price">Pet price</label>
                                            <input type="number" 
                                            id="price" 
                                            name="price" 
                                            value={ price }
                                            onChange = { onChange }
                                            required/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="status">Status</label>
                                            <select id="status" name="status" 
                                            className="form-control custom-select"
                                            value={ status }
                                            onChange = { onChange }
                                            required >
                                                <option value={""} defaultValue disabled>Select one</option>
                                                <option value={"Active"}> Active</option>
                                                <option value={"Inactive"}> Inactive</option>
                                            </select>
                                        </div>
                        
                                        <div className="offset-4 col-md-4">
                                            <Link to={"/admin/pets"} className="btn btn-secondary">Cancel</Link>
                                            &nbsp;
                                            <button type='submit' className="btn btn-success"> Save </button>
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

export default EditPet
