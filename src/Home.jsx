import React from 'react'
import { Link } from 'react-router-dom'
import ContentHeader from '../src/Componentes/ContentHeader'
import Footer from '../src/Componentes/Footer'
import Navbar from '../src/Componentes/Navbar'
import SidebarContainer from '../src/Componentes/SidebarContainer'

export const Home = () => {
    
  return (
    <div className='wrapper'>
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className= 'content-wrapper'>
            <ContentHeader
            titulo={"Dashboard"}
            breadCrumb1={"Inicio"} 
            breadCrumb2={"Dashcard"} 
            ruta1={"/home"}
            />
            <section className='content'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 col-6'>
                            <div className='small-box bg-info'>
                                <div className='inner'>
                                    <h3>Clientes</h3>
                                </div>
                                <div className='icon'>
                                    <i className='fa fa-edit'></i>
                                </div>
                                <Link to={"/clientes"} className='small-box-footer'>Ver Clientes</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-6'>
                            <div className='small-box bg-info'>
                                <div className='inner'>
                                    <h3>Compras</h3>
                                </div>
                                <div className='icon'>
                                    <i className='fa fa-edit'></i>
                                </div>
                                <Link to={"/compras"} className='small-box-footer'>Ver Clientes</Link>
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
