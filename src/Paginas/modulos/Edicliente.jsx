import React,{useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader'
import Footer from '../../Componentes/Footer'
import Navbar from '../../Componentes/Navbar'
import SidebarContainer from '../../Componentes/SidebarContainer' 
import APIInvoke from "../../configuracion/APIInvoke"
import Alert from '../../Extencion/Aviso'


const EditClientes = () => {
     const[nombres, setNombres] = useState('');
     const[apellidos, setApellidos] = useState('');
     const[cedula, setCedula] = useState('');
     const[correo, setCorreo] = useState('');
     const[numeroContacto, setNContacto] = useState('');
     const[nit, setNit] = useState('');
     const[direccion, setDireccion] = useState('');
     const {id} = useParams();
     const nav= useNavigate()

     const Upcliente = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/clientes/${id}`, {
            nombres: nombres, apellidos: apellidos, cedula:cedula, correo:correo, numeroContacto: numeroContacto, nit:nit, direccion:direccion
        })
        const msg="Se ha actualizado los datos del cliente";
        Alert(msg, "Informacion", "success","#198754");
        nav('/clientes');
    }
    const getCliente = async ()=> {
        const res = await APIInvoke.invokeGET(`/api/clientes/${id}`);
        setNombres(res.nombres);
        setApellidos(res.apellidos);
        setCedula(res.cedula);
        setCorreo(res.correo);
        setNContacto(res.numeroContacto);
        setNit(res.nit); 
        setDireccion(res.direccion);
    }

    useEffect(() => {
        getCliente()

    }, []);
  return (
    <div className='wrapper'>
        <Navbar
            rot={"/clientes/editar/:id"}
        />
        <SidebarContainer 
            ruta={"/clientes/editar/:id"}
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
                        <form onSubmit={Upcliente}>
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
                                    onChange={(e) => setNombres(e.target.value)}
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
                                    onChange={(e) => setApellidos(e.target.value)}
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
                                    onChange={(e) => setCedula(e.target.value)}
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
                                    onChange={(e) => setCorreo(e.target.value)}
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
                            <label htmlFor='numerocontacto'>Numero de contacto</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese su numero de contacto"
                                    type="number"
                                    id="numerocontacto"
                                    name="numerocontacto"
                                    value={numeroContacto}
                                    onChange={(e) => setNContacto(e.target.value)}
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
                                    onChange={(e) => setNit(e.target.value)}
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
                                    onChange={(e) => setDireccion(e.target.value)}
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
                                <button type="submit" className="btn btn-block btn-primary">Editar cliente</button> 
                                
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
export default EditClientes