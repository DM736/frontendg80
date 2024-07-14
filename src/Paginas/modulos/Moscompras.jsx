import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader'
import Footer from '../../Componentes/Footer'
import Navbar from '../../Componentes/Navbar'
import SidebarContainer from '../../Componentes/SidebarContainer' 
import APIInvoke from "../../configuracion/APIInvoke"
import Alert from '../../Extencion/Aviso';
const ShowCompra = () => {
    const [compras, setCompras] = useState([]);
    const tomaCompra= async ()=>{
        const resp = await APIInvoke.invokeGET("/api/compras");
        setCompras(resp);
    }
    useEffect(()=>{
        tomaCompra();
    },[])
   
    const eliminarCompra = async (i, idCom)=>{
        i.preventDefault();
        const resp =await APIInvoke.invokeDELETE(`/api/compras/${idCom}`);
        const msg="Se ha eliminado la compra";
        Alert(msg, "Informacion", "success","#198754");
        tomaCompra();
    }
    
  return (
    
    <div className='wrapper'>
        <Navbar 
            rot={"/compras"}
        />
        <SidebarContainer
            ruta={"/compras"}
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
                        <h3 className='card-title'><Link to={"/compras/agregar"} className='btn btn-block btn-primary btn-sm'>Agregar nueva compra</Link></h3>
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
                            <thead className="table-dark">
                                <tr className='align-items-start'>
                                    <th style={{width:'10%'}}>Mas Acciones</th>
                                    <th style={{width:'15%'}}>Nombre del Comprador</th>
                                    <th style={{width:'15%'}}>Cantidad de Productos</th>
                                    <th style={{width:'10%'}}>Total de la compra </th>
                                    <th style={{width:'15%'}}>Medio de pago</th>
                                    <th style={{width:'10%'}}>Nombre de la tienda</th>
                                    <th style={{width:'10%'}}>fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {compras.map((comp, i)=>(
                                    <tr key={i}>
                                        <td>
                                            <Link to={`/compras/editar/${comp._id}`} className='btn btn-primary mt-2 mb-2'><i className='fa-solid fa-pen-to-square'></i>Editar</Link>
                                            <button onClick={(e)=>eliminarCompra(e, comp._id)} className='btn btn-danger'><i className='fa-solid fa-trash'></i>Eliminar</button>                                    
                                        </td>
                                        <td>{comp.nombreComprador}</td>
                                        <td>{comp.numeroProductos}</td>
                                        <td>{comp.total}</td>
                                        <td>{comp.medioDPago}</td>
                                        <td>{comp.nombreTienda}</td>
                                        <td>{comp.fecha}</td>
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

export default ShowCompra