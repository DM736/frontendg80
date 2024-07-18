import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader'
import Footer from '../../Componentes/Footer'
import Navbar from '../../Componentes/Navbar'
import SidebarContainer from '../../Componentes/SidebarContainer' 
import APIInvoke from "../../configuracion/APIInvoke"
import Alert from '../../Extencion/Aviso'


const AddNewCita = () => {
    const naveg = useNavigate();
const [cita, setMedCita]= useState({
    entidad:"",especialidad:"",sede: "",costo: "",hora: "",fecha:""})
const {entidad,especialidad,sede,costo,hora,fecha}=cita

const creCita = async()=>{
    const data ={
        entidad: entidad.entidad,
        especialidad: especialidad.especialidad,
        sede: sede.sede,
        costo: costo.costo,
        hora: hora.hora,
        fecha: fecha.fecha
    }
    console.log(cita);
    const res = await APIInvoke.invokePOST("/api/citas", data);
    const idc = res._id;
    if(idc === ''){
        const msg ="Hubo un error al agregar la cita medica"
        Alert(msg, "Error", "error","#DC3545");
    }else {
        const msg="La cita medica fue creada con exito";
        Alert(msg, "Informacion", "success","#198754");
        setCliente({entidad:"",especialidad:"",sede: "",costo: "",hora: "",fecha:""});
        naveg("/citas")
    }
    
}
const oneSubmit = (e) => {
    e.preventDefault();
    creCita();
}
const oneChange = (e) => {
    setMedCita({
        ...cita, [e.target.name]: e.target.value
    })
}

  return (
    <div className='wrapper'>
        <Navbar
            rot={"/citas/agregar"}
        />
        <SidebarContainer
            ruta={"/citas/agregar"}
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
                            <label htmlFor='entidad' className='col'>Eps </label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className="inp-text col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                    placeholder="Ingrese la eps de la cita"
                                    type="text"
                                    id="entidad"
                                    name="entidad"
                                    value={entidad}
                                    onChange={oneChange}
                                    required
                                />
                                 <span className="fa-solid fa-hospital col-2 p-3 mb-2"/>
                            </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='especialidad'>Especialidad requerida</label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese el tipo de especialidad requerida"
                                    type="text"
                                    id="especialidad"
                                    name="especialidad"
                                    value={especialidad}
                                    onChange={oneChange}
                                    required
                                />
                                 <span className="fa-solid fa-stethoscope col-2 p-3 mb-2" />
                            </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='sede'>Sede de la cita</label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese la sede de la cita"
                                    type="text"
                                    id="sede"
                                    name="sede"
                                    value={sede}
                                    onChange={oneChange}
                                    required
                                />
                                 <span className="fa-solid fa-map-location-dot col-2 p-3 mb-2"/>
                            </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='costo'>Costo por especialidad</label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese el costo de la especialidad"
                                    type="number"
                                    id="costo"
                                    name="costo"
                                    value={costo}
                                    onChange={oneChange}
                                    required
                                />
                                 <span className="fa-solid fa-dollar-sign col-2 p-3 mb-2"/>
                            </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='hora'>Hora de la cita</label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese la hora de la cita"
                                    type="text"
                                    id='hora'
                                    name='hora'
                                    value={hora}
                                    onChange={oneChange}
                                    required
                                />
                                 <span className="fa-regular fa-clock col-2 p-3 mb-2"/>
                            </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='fecha'>Fecha de la cita</label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className="form-control"
                                    placeholder="Ingrese la fecha de la cita"
                                    type="date"
                                    id="fecha"
                                    name="fecha"
                                    value={fecha}
                                    onChange={oneChange}
                                    required
                                />
                                 <span className="fa-solid fa-calendar-days col-2 p-3 mb-2"/>
                            </div>
                            </div>
                        </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-block btn-primary">Agregar cita</button> 
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
export default AddNewCita