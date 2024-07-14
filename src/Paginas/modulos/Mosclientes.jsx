import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader'
import Footer from '../../Componentes/Footer'
import Navbar from '../../Componentes/Navbar'
import SidebarContainer from '../../Componentes/SidebarContainer' 
import APIInvoke from "../../configuracion/APIInvoke"
import Alert from '../../Extencion/Aviso'
const Mosclientes = () => {
    const [cliente, setCliente] = useState([]);

    const getClientes= async ()=>{
        const response = await APIInvoke.invokeGET("/api/clientes");
        setCliente(response);
    }
    useEffect(()=>{
        getClientes();
    },[])

    const delClientes = async (i, idCliente)=>{
        i.preventDefault();
        const resp =await APIInvoke.invokeDELETE(`/api/clientes/${idCliente}`);
        const msg="Se ha eliminado el cliente";
        Alert(msg, "Informacion", "success","#198754");
        getClientes();
    }
  return (
    
    <div className='wrapper'>
        <Navbar 
            rot={"/clientes"}
        />
        <SidebarContainer
            ruta={"/clientes"}
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
                        <h3 className='card-title'><Link to={"/clientes/agregar"} className='btn btn-block btn-primary btn-sm'>Crear Cliente</Link></h3>
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
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th style={{width:'15%'}}>Nombre clientes</th>
                                    <th style={{width:'15%'}}>Apellido clientes</th>
                                    <th style={{width:'10%'}}>Cedula </th>
                                    <th style={{width:'15%'}}>Correo</th>
                                    <th style={{width:'10%'}}>Numero de Contacto</th>
                                    <th style={{width:'10%'}}>Nit</th>
                                    <th style={{width:'10%'}}>Direccion</th>
                                    <th style={{width:'10%'}}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cliente.map((cli, index)=>(
                                <tr key={index}>
                                    <td>{cli.nombres}</td>
                                    <td>{cli.apellidos}</td>
                                    <td>{cli.cedula}</td>
                                    <td>{cli.correo}</td>
                                    <td>{cli.numeroContacto}</td>
                                    <td>{cli.nit}</td>
                                    <td>{cli.direccion}</td>
                                    <td>
                                        <Link to={`/clientes/editar/${cli._id}`} className='btn btn-primary mt-2 mb-2'><i className='fa-solid fa-pen-to-square'></i></Link>
                                        <button onClick={(e)=>delClientes(e, cli._id)} className='btn btn-danger'><i className='fa-solid fa-trash'></i></button>                                    
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Mosclientes
