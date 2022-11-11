import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import APIInvoke from '../../../utils/APIInvoke'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import swal from 'sweetalert';

const Users = () => {

    // Funcion para guardar la lista de resultados
    const [users, setUsers] = useState(
      []
    );
  
    // Para llamar la ruta del back y traer los datos
    const loadUsers = async () => {
        const response = await APIInvoke.invokeGET(`/user/list/`);
        setUsers( response );
        console.log( response );
    }

  // Funcion para eliminar con el boton
  const deleteUser = async (e, id) => {

    e.preventDefault();

    swal({
        title: 'Deleted user',
        icon: 'error',
        text: `Are you sure you want to delete this user?`,
        buttons: {
            confirm: {
                text: 'Delete',
                value: true,
                visible: true,
                className: 'btn btn-danger',
                closeModal: true
            },
            cancel: {
                text: 'Cancel',
                value: false,
                visible: true,
                className: 'btn btn-default',
                closeModal: true
            }
        }
    }).then( async ( value ) => {

        if (value) {

            const response = await APIInvoke.invokeDELETE(`/user/${id}`);

            if (response.message === "User deleted") {

                swal({
                    title: 'User deleted',
                    icon: 'success',
                    text: `Deleted`,
                    buttons: {
                        confirm: {
                            text: 'Close',
                            value: true,
                            visible: true,
                            className: 'btn btn-success',
                            closeModal: true
                        }
                    }
                });

    // Carga de nuevo la info, despues de eliminar
    loadUsers();
  }}});
}
    
    useEffect(() => {
      loadUsers();
    }, []);
  
    return (
      <div className="wrapper">
          {/* Agrega un componete en este caso la barra de navegación */}
          <Navbar></Navbar>
          <Sidebar></Sidebar>
  
            <div className="content-wrapper">
            <Header title={"List Users"} module={"Users"} ></Header>
  
                <section className="content">

                <Link to={"/admin/users/create"} className="btn btn-sm btn-success">Create user</Link>
                <br/> <br/>
            
                  
                <table className="table table-striped projects">
                        <thead>
                            <tr>
                                <th style={{ width: '1%' }}> # </th>
                                <th style={{ width: '20%' }}> Name </th>
                                <th style={{ width: '30%' }}> Email </th>
                                <th> Password </th>
                                <th style={{ width: '8%' }} className="text-center"> Update </th>
                                <th style={{ width: '20%' }}> </th>
                            </tr>
                        </thead>
                        <tbody>
  
                          {/* Para imprimir los valores de la base de datos */}
                          {
                            users.map(
                              item => 
                              // React exige una llave unica para identificar los valores a mostrar o si no genera error por consola
                              // Error: Each child in a list should have a unique "key" prop.
                              <tr key={ item._id }>
                                <td> { item._id } </td>
                                <td> { item.name } </td>
                                <td> { item.email } </td>
                                <td className="project_progress"> {item.password.substring(0, 10)} ... </td>
                                <td className="project-state"> {item.updatedAt} </td>
                                <td className="project-actions text-right">
                                    <Link className="btn btn-primary btn-sm" to={ "#" } title='View'>
                                        <i className="fas fa-folder">
                                        </i>
                                    </Link >
                                    &nbsp;
                                    <Link className="btn btn-info btn-sm" to={ "#" } title='Edit'>
                                        <i className="fas fa-pencil-alt">
                                        </i>
                                    </Link >
                                    &nbsp;
                                    <button className="btn btn-danger btn-sm" 
                                    onClick={(e) => { deleteUser(e, item._id) }} title='Delete'>
                                        <i className="fas fa-trash"> </i>
                                    </button >
                                </td>
                            </tr>
                              )
                          }
  
                        </tbody>
                    </table>
  
                </section>
            </div>
  
          <Footer></Footer>
      </div>
    )
  }
  

export default Users;