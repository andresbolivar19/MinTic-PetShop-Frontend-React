import React from 'react'
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Post = () => {
  return (
    <div class="wrapper">
        {/* Agrega un componete en este caso la barra de navegación */}
        <Navbar></Navbar>
        <Sidebar></Sidebar>

          <div className="content-wrapper">
          <Header title={"List Posts"} module={"Posts"} ></Header>

              <section className="content">
                
                Post
                {/* Dashboard es la pagina guia para crear otras paginas
                A partir de aqui va lo realacionado con la pagina */}

              </section>
          </div>

        <Footer></Footer>
    </div>
  )
}

export default Post;
