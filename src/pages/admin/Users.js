import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Users = () => {
  return (
    <div class="wrapper">
        {/* Agrega un componete en este caso la barra de navegación */}
        <Navbar></Navbar>
        <Sidebar></Sidebar>

          <div className="content-wrapper">
              <Header title={"List Users"} module={"Users"} ></Header>
          
              <section className="content">
                  <table className="table table-striped projects">
                      <thead>
                          <tr>
                              <th style={{ width: '1%' }}> # </th>
                              <th style={{ width: '20%' }}> Project Name </th>
                              <th style={{ width: '30%' }}> Team Members </th>
                              <th> Project Progress </th>
                              <th style={{ width: '8%' }} className="text-center"> Status </th>
                              <th style={{ width: '20%' }}> </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>
                                  #
                              </td>
                              <td>
                                  <Link>
                                      AdminLTE v3
                                  </Link >
                                  <br />
                                  <small>
                                      Created 01.01.2019
                                  </small>
                              </td>
                              <td>
                                  <ul className="list-inline">
                                      <li className="list-inline-item">
                                          <img alt="Avatar" className="table-avatar" src="../dist/img/avatar.png" />
                                      </li>
                                      <li className="list-inline-item">
                                          <img alt="Avatar" className="table-avatar" src="../dist/img/avatar2.png" />
                                      </li>
                                      <li className="list-inline-item">
                                          <img alt="Avatar" className="table-avatar" src="../dist/img/avatar3.png" />
                                      </li>
                                      <li className="list-inline-item">
                                          <img alt="Avatar" className="table-avatar" src="../dist/img/avatar4.png" />
                                      </li>
                                  </ul>
                              </td>
                              <td className="project_progress">
                                  <div className="progress progress-sm">
                                      <div className="progress-bar bg-green" role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} style={{ width: '57%' }}>
                                      </div>
                                  </div>
                                  <small>
                                      57% Complete
                                  </small>
                              </td>
                              <td className="project-state">
                                  <span className="badge badge-success">Success</span>
                              </td>
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
                                  <Link className="btn btn-danger btn-sm" to={ "#" } title='Delete'>
                                      <i className="fas fa-trash">
                                      </i>
                                  </Link >
                              </td>
                          </tr>
                          

                      </tbody>
                  </table>
              </section>
          </div>

        <Footer></Footer>
    </div>
  )
}

export default Users;