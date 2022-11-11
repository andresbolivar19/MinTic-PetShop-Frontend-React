import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Navbar from '../../../components/Navbar';
import Sidebar from '../../../components/Sidebar';
import APIInvoke from '../../../utils/APIInvoke';

const Pets = () => {

  const [pets, setPets] = useState(
    []
  );

  const [ search, setSearch] = useState("")
  // Para llamar la ruta del back y traer los datos
  const loadPets = async () => {

    const response = await APIInvoke.invokeGET(`/pet/list`);
    setPets(response);
  };

  // Funcion para eliminar con el boton
  const deletePet = async (e, id) => {

    e.preventDefault();

    swal({
      title: 'Deleted pet',
      icon: 'error',
      text: `Are you sure you want to delete this pet?`,
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
    }).then( async (value) => {

      if (value) {

        const response = await APIInvoke.invokeDELETE(`/pet/${id}`);

        if (response.message === "Pet deleted") {

          swal({
            title: 'Pet deleted',
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
          loadPets();

        }

      }

    });

  }

  const searchEvent = async () => {

    const response = await APIInvoke.invokeGET(`/pet/list/${search}`);
    setPets(response);

  };

  const onChange = (e) => { 
    setSearch( e.target.value );    
}


  useEffect(() => {
    loadPets();
  }, []);


  return (
    <div className='wrapper'>
      {/* Agrega un componete en este caso la barra de navegación */}
      <Navbar></Navbar>

      <Sidebar></Sidebar>


      <div className='content-wrapper'>

        <Header
          title={"Pets list"}
          module={"Pets"}
        ></Header>

        <div className='row'>
          <div className='col-7'>
          <Link to={"/admin/pets/create"} className="btn btn-sm btn-success" > Create pet </Link>
          </div>

          <div className='col-4'>
            <button className='btn btn-sm btn-primary float-right' onClick={ searchEvent } >Search</button>
            <input type="text" id="search" value={search} onChange={ onChange } name="search" placeholder='Search' className="float-right" />
          </div>
        
          <br/><br/>
        
        </div>
        <table className="table table-striped projects">
          <thead>
            <tr>
              <th style={{ width: '1%' }}> Category </th>
              <th style={{ width: '20%' }}> Name </th>
              <th style={{ width: '30%' }}> Created By </th>
              <th> Photo </th>
              <th style={{ width: '20%' }} className="text-center"> Update </th>
              <th style={{ width: '20%' }}> </th>
            </tr>
          </thead>
          <tbody>

            {/* Para imprimir los valores de la base de datos */}
            {
              pets.map(
                item =>
                // React exige una llave unica para identificar los valores a mostrar o si no genera error por consola
                // Error: Each child in a list should have a unique "key" prop.
                  <tr key={ item._id }>
                    <td> {item.category} </td>
                    <td> {item.name} </td>
                    <td> {item.user} </td>
                    <td className="project_progress">
                      <img alt="Avatar" className="table-avatar" src={item.photoUrls} />
                    </td>
                    <td className="project-state"> {item.updatedAt} </td>
                    <td className="project-actions text-right">
                      <Link className="btn btn-primary btn-sm" to={`/admin/pets/view/${ item._id }`} title="View">
                        <i className="fas fa-eye"> </i>
                      </Link>
                      &nbsp;&nbsp;
                      <Link className="btn btn-info btn-sm" to={`/admin/pets/edit/${ item._id }`}  title="Edit">
                        <i className="fas fa-pencil-alt"> </i>
                      </Link>
                      &nbsp;&nbsp;
                      <button className="btn btn-danger btn-sm"
                        onClick={(e) => { deletePet(e, item._id) }}
                        title='Delete'> <i className="fas fa-trash"> </i>
                      </button>
                    </td>
                  </tr>
              )

            }

          </tbody>
        </table>




      </div>

      <Footer></Footer>
    </div>
  )
}

export default Pets;
