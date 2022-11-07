import React from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Dashboard = () => {
  return (
    <div className="wrapper">
        {/* Agrega un componete en este caso la barra de navegación */}
        <Navbar></Navbar>
        <Sidebar></Sidebar>

          <div className="content-wrapper">
            <Header title={"Home"} module={"Dashboard"} ></Header>

              <section className="content">

                {/* Dashboard es la pagina guia para crear otras paginas
                A partir de aqui va lo realacionado con la pagina */}

              </section>
          </div>

        <Footer></Footer>
    </div>
  )
}

export default Dashboard;
