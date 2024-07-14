import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader'
import Footer from '../../Componentes/Footer'
import Navbar from '../../Componentes/Navbar'
import SidebarContainer from '../../Componentes/SidebarContainer' 
import APIInvoke from "../../configuracion/APIInvoke"
import Alert from '../../Extencion/Aviso'


const AddNClientes = () => {
    const naveg = useNavigate();
const [cliente, setCliente]= useState({
    nombres:"",apellidos:"",cedula: "",correo: "",numeroContacto: "",nit:"",direccion:""
})
const {nombres,apellidos,cedula,correo,numeroContacto,nit,direccion}=cliente

const createCli = async()=>{
    const data ={
        nombres: cliente.nombres,
        apellidos: cliente.apellidos,
        cedula: cliente.cedula,
        correo: cliente.correo,
        numeroContacto: cliente.numeroContacto,
        nit: cliente.nit,
        direccion: cliente.direccion
    }
    const res = await APIInvoke.invokePOST("/api/clientes", data);
    const idCliente = res._id;
    if(idCliente === ''){
        const msg ="Hubo un error al agregar un cliente"
        Alert(msg, "Error", "error","#DC3545");
    }else {
        const msg="El cliente fue creado con exito";
        Alert(msg, "Informacion", "success","#198754");
        setCliente({nombres:"",apellidos:"",cedula: "",correo: "",numeroContacto: "",nit:"",direccion:""});
        naveg("/clientes")
    }
    
}
const oneSubmit = (e) => {
    e.preventDefault();
    createCli();
}
const oneChange = (e) => {
    setCliente({
        ...cliente, [e.target.name]: e.target.value
    })
}

  return (
    <div className='wrapper'>
        <Navbar
            rot={"/clientes/agregar"}
        />
        <SidebarContainer
            ruta={"/clientes/agregar"}
        />
        <div className= 'content-wrapper'>
            <ContentHeader
            titulo={"Dashboard"}
            breadCrumb1={"Inicio"} 
            breadCrumb2={"Dashcard"} 
            ruta1={"/home"}
            />
            <section className='content'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='card-tool'>
                            <button type="button" className='btn btn-tool' data-card-widget="collapse" title="collapse">
                                <i className='fas fa-minus'></i>
                            </button>
                            <button type="button" className='btn btn-tool' data-card-widget="remove" title="remove">
                                <i className='fas fa-times'></i>
                            </button>
                        </div>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={oneSubmit}>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='nombres'>Nombres</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su nombre"
                                    type="text"
                                    id="nombres"
                                    name="nombres"
                                    value={nombres}
                                    onChange={oneChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='apellidos'>Apellidos</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese sus apellidos"
                                    type="text"
                                    id="apellidos"
                                    name="apellidos"
                                    value={apellidos}
                                    onChange={oneChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='cedula'>Cedula</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su documento de identidad"
                                    type="numero"
                                    id="cedula"
                                    name="cedula"
                                    value={cedula}
                                    onChange={oneChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='correo'>Correo</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su correo electronico"
                                    type="email"
                                    id="correo"
                                    name="correo"
                                    value={correo}
                                    onChange={oneChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='numeroContacto'>Numero de Contacto</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su numero de nit"
                                    type="number"
                                    id='numeroContacto'
                                    name='numeroContacto'
                                    value={numeroContacto}
                                    onChange={oneChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='nit'>Nit</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su numero de nit"
                                    type="number"
                                    id="nit"
                                    name="nit"
                                    value={nit}
                                    onChange={oneChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='direccion'>Direccion</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su direccion de residencia"
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    value={direccion}
                                    onChange={oneChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-block btn-primary">Agregar cliente</button> 
                                
                            </div>
                            
                        </form>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </div>
  )
}
export default AddNClientes
