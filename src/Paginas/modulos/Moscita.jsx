import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader'
import Footer from '../../Componentes/Footer'
import Navbar from '../../Componentes/Navbar'
import SidebarContainer from '../../Componentes/SidebarContainer' 
import APIInvoke from "../../configuracion/APIInvoke"
import Alert from '../../Extencion/Aviso'
const MosCitaMed = () => {
    const [cita, setCita] = useState([]);

    const getCitas= async ()=>{
        const response = await APIInvoke.invokeGET("/api/citas");
        setCita(response);
        console.log(response)
    }
    useEffect(()=>{
        getCitas();
    },[])

    const delCitas = async (i, idc)=>{
        i.preventDefault();
        const resp =await APIInvoke.invokeDELETE(`/api/citas/${idc}`);
        const msg="Se ha eliminado la cita medica";
        Alert(msg, "Informacion", "success","#198754");
        getCitas();
    }
  return (
    
    <div className='wrapper'>
        <Navbar 
            rot={"/citas"}
        />
        <SidebarContainer
            ruta={"/citas"}
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
                        <h3 className='card-title'><Link to={"/clientes/agregar"} className='btn btn-block btn-primary btn-sm'>Crear Cita Medica</Link></h3>
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
                                    <th style={{width:'15%'}}>Acciones</th>
                                    <th style={{width:'15%'}}>EPS</th>
                                    <th style={{width:'10%'}}>Tipo de especialidad</th>
                                    <th style={{width:'10%'}}>Sede </th>
                                    <th style={{width:'15%'}}>Correo</th>
                                    <th style={{width:'10%'}}>Costo de especialidad</th>
                                    <th style={{width:'10%'}}>Hora</th>
                                    <th style={{width:'10%'}}>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cita.map((cli, index)=>(
                                <tr key={index}>
                                    <td>{cli.nombres}</td>
                                    <td>{cli.apellidos}</td>
                                    <td>{cli.cedula}</td>
                                    <td>{cli.correo}</td>
                                    <td>{cli.numeroContacto}</td>
                                    <td>{cli.nit}</td>
                                    <td>{cli.direccion}</td>
                                    <td>
                                        <Link to={`/citas/editar/${cli._id}`} className='btn btn-primary mt-2 mb-2'><i className='fa-solid fa-pen-to-square'></i></Link>
                                        <button onClick={(e)=>delCitas(e, cli._id)} className='btn btn-danger'><i className='fa-solid fa-trash'></i></button>                                    
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

export default MosCitaMed