import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader'
import Footer from '../../Componentes/Footer'
import Navbar from '../../Componentes/Navbar'
import SidebarContainer from '../../Componentes/SidebarContainer' 
import APIInvoke from "../../configuracion/APIInvoke"
import Alert from '../../Extencion/Aviso'
import "../../form.css"


const AddNewCompra = () => {
const naveg = useNavigate();
const [compras, setCompras]= useState({
    nombreComprador:"",numeroProductos:"",total: "",medioDPago:"",nombreTienda: "",fecha:""})
const {nombreComprador,numeroProductos,total,medioDPago,nombreTienda,fecha}=compras
const createHisCompra = async()=>{
    const data ={
        nombreComprador: compras.nombreComprador,
        numeroProductos: compras.numeroProductos,
        total: compras.total,
        medioDPago: compras.medioDPago,
        nombreTienda: compras.nombreTienda,
        fecha: compras.fecha
    }
    const res = await APIInvoke.invokePOST("/api/compras", data);
    const idCliente = res._id;
    if(idCliente === ''){
        const msg ="Hubo un error al agregar la compra"
        Alert(msg, "Error", "error","#DC3545");
    }else {
        const msg="El compra fue agregada con exito";
        Alert(msg, "Informacion", "success","#198754");
        setCompras({nombreComprador:"",numeroProductos:"",total: "",medioDPago: "",nombreTienda: "",fecha:""});
        naveg("/compras")
    }
    

}
const oneSubmit = (e) => {
    e.preventDefault();
    if(medioDPago==""){
        const msg ="Debe seleccionar el metodo de pago"
        Alert(msg, "Informacion", "warning","#F2D544");  
    }
    createHisCompra();
}

const oneChange = (e) => {
    setCompras({
        ...compras, [e.target.name]: e.target.value
    })

}

  return (
    <div className='wrapper'>
        <Navbar
            rot={"/compras/agregar"}
        />
        <SidebarContainer
            ruta={"/compras/agregar"}
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
                                <label htmlFor='nombreComprador' className='col'>Nombre del comprador</label>
                                <div className='d-flex justify-content-center align-items-center'>
                                <input
                                        className="inp-text col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                        placeholder="Ingrese su nombre"
                                        type="text"
                                        id="nombreComprador"
                                        name="nombreComprador"
                                        value={nombreComprador}
                                        onChange={oneChange}
                                        required/>
                                        <span className="fas fa-user col-2 p-3 mb-2" />
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor='numeroProductos'>Cantidad de productos</label>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <input
                                        className=" col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                        placeholder="Ingrese la cantidad de productos comprados"
                                        type="number"
                                        id="numeroProductos"
                                        name="numeroProductos"
                                        value={numeroProductos}
                                        onChange={oneChange}
                                        required/>
                                    <span className="col fa-solid fa-receipt col-2 p-3 mb-2" />
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='total'>Total de compras</label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className="col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                    placeholder="Ingrese el total de la compra"
                                    type="number"
                                    id="total"
                                    name="total"
                                    value={total}
                                    onChange={oneChange}
                                    required
                                />
                                <span className="col fa-solid fa-dollar-sign col-2 p-3 mb-2" />
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor='medioDPago'>Medio de pago </label>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <input
                                        className=" col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                        placeholder="Medio de pago: tarjeta de credito, efectivo, billetera.."
                                        type="text"
                                        id="medioDPago"
                                        name="medioDPago"
                                        value={medioDPago}
                                        onChange={oneChange}
                                        required/>
                                    <span className="col fa-regular fa-credit-card col-2 p-3 mb-2" />
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor='nombreTienda'>Nombre de la tienda</label>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <input
                                        className=" col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                        placeholder="Ingrese el nombre de la tienda"
                                        type="text"
                                        id="nombreTienda"
                                        name="nombreTienda"
                                        value={nombreTienda}
                                        onChange={oneChange}
                                        required/>
                                    <span className="col fa-solid fa-basket-shopping col-2 p-3 mb-2" />
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                                <label htmlFor='fecha'>fecha de la compra</label>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <input
                                        className=" col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                        placeholder="Ingrese la fecha en formato dd/mm/aaaa"
                                        type="date"
                                        id="fecha"
                                        name="fecha"
                                        value={fecha}
                                        onChange={oneChange}
                                        required/>
                                    <span className="col fa-solid fa-calendar-days col-2 p-3 mb-2" />
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
export default AddNewCompra