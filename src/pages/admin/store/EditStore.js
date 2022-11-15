
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import APIInvoke from '../../../utils/APIInvoke'

const EditStore = () => {

    // Para cambiar de pagina, por ejemplo despues de guardar un store
    let navigate = useNavigate();

     // Guarda el ID de la publicacion que se quiere editar
     const { id } = useParams();

    // No esta usuario por que en el backend storeController.js envia el store con el usuario logueado
    // Importante que los nombre definidos sean iguales a los que se penen en el campo del formulario para que funcione el onChange
    const [ store, setStore ] = useState(
        {
            idPet:'',
            quantity:'',
            address:'',
            price:'',
            status:''
        }
    )

    // Variables para guardar el contenido del objeto store
    const { _id, idPet, quantity, address, price, status, user } = store;

    // Metodo onChange
    // "...store" para que muestre todo el contenido del objeto y lo agrega como diccionario
    //[ e.target.name ] : e.target.value para adicionar lo que se pone por teclaro en el campo
    const onChange = (e) => { 
        setStore({
            ...store,
            [ e.target.name ] : e.target.value
        });    
    }

    const onSubmit = (e) => { 
        e.preventDefault();
        saveStore();
    }

    const saveStore = async () => { 
        
        const data = {
            idPet: store.idPet,
            quantity: store.quantity,
            address: store.address,
            price: store.price,
            status: store.status
        }

        const response = await APIInvoke.invokePUT(`/store/${id}`, data);

        if( response.message === "Store updated" ){

            swal({
                title: 'Store updated',
                icon: 'success',
                text: `Store updated successfully`,
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
                navigate('/admin/stores')
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
        async function loadStore(){
            const response = await APIInvoke.invokeGET(`/store/${id}`);
            setStore(response);
            console.log(response);
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
                title={"Edit store"}
                module={"store"}
                ></Header>
                
                <section className="content">
                <form onSubmit={ onSubmit } >
                    <div>
                        <div className="row">
                            <div className="offset-2 col-md-8">

                                <div className="card card-primary">

                                    <div className="card-header">
                                        <h3 className="card-title">Edit Store</h3>
                                    </div>
                                    <div className="card-body">

                                    <div className="form-group">
                                            <label htmlFor="idPet">Store id</label>
                                            <input type="text" 
                                            id="idPet" 
                                            name="idPet" 
                                            value={ idPet }
                                            onChange = { onChange }
                                            required/>
                                    </div>

                                    <div className="form-group">
                                            <label htmlFor="quantity">Store quantity</label>
                                            <input type="text" 
                                            id="quantity" 
                                            name="quantity" 
                                            value={ quantity }
                                            onChange = { onChange }
                                            required/>
                                    </div>

                                    <div className="form-group">
                                            <label htmlFor="address">Store address</label>
                                            <input type="text" 
                                            id="address" 
                                            name="address" 
                                            value={ address }
                                            onChange = { onChange }
                                            required/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="price">Store price</label>
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
                                            <Link to={"/admin/stores"} className="btn btn-secondary">Cancel</Link>
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

export default EditStore
