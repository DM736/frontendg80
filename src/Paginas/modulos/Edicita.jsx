import React,{useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader'
import Footer from '../../Componentes/Footer'
import Navbar from '../../Componentes/Navbar'
import SidebarContainer from '../../Componentes/SidebarContainer' 
import APIInvoke from "../../configuracion/APIInvoke"
import Alert from '../../Extencion/Aviso'


const EditCita = () => {
     const[entidad, setEnti] = useState('');
     const[especialidad, setEspeci] = useState('');
     const[sede, setSede] = useState('');
     const[costo, setCost] = useState('');
     const[hora, setTime] = useState('');
     const[fecha, setDate] = useState('');
     const {id} = useParams();
     const nav= useNavigate()

     const UpdaCita = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/citas/${id}`, {
            entidad: entidad, especialidad: especialidad, sede:sede, 
            costo:costo, hora: hora, fecha:fecha
        })
        const msg="Se ha actualizado los datos de la cita medica";
        Alert(msg, "Informacion", "success","#198754");
        nav('/citas');
    }
    const getMedCita = async ()=> {
        const res = await APIInvoke.invokeGET(`/api/citas/${id}`);
        setEnti(res.entidad);
        setEspeci(res.especialidad);
        setSede(res.sede);
        setCost(res.costo);
        setTime(res.hora);
        setDate(res.fecha); 
    }

    useEffect(() => {
        getMedCita()

    }, []);
  return (
    <div className='wrapper'>
        <Navbar
            rot={"/citas/editar/:id"}
        />
        <SidebarContainer 
            ruta={"/citas/editar/:id"}
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
                        <form onSubmit={UpdaCita}>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='entidad' className='col'>Eps afiliada</label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className="inp-text col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                    placeholder="Ingrese la eps de la cita"
                                    type="text"
                                    id="entidad"
                                    name="entidad"
                                    value={entidad}
                                    onChange={(e) => setEnti(e.target.value)}
                                    required/>
                                    <span className="fas fa-user col-2 p-3 mb-2" />
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='especialidad' className='col'>Tipo de especialidad</label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className="inp-text col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                    placeholder="Ingrese el tipo de especialidad requerida"
                                    type="text"
                                    id="especialidad"
                                    name="especialidad"
                                    value={especialidad}
                                    onChange={(e) => setEspeci(e.target.value)}
                                    required/>
                                    <span className="fas fa-user col-2 p-3 mb-2" />
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='sede'>Sede lugar de la cita</label>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <input
                                        className=" col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                        placeholder="ingrese la sede asignada de la cita"
                                        type="text"
                                        id="sede"
                                        name="sede"
                                        value={sede}
                                        onChange={(e) => setSede(e.target.value)}
                                        required/>
                                        <span className="col fa-solid fa-receipt col-2 p-3 mb-2" />
                                    </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='costo'>Costo de la especialidad</label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className="col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                    placeholder="Ingrese el costo de la especialidad"
                                    type="number"
                                    id="costo"
                                    name="costo"
                                    value={costo}
                                    onChange={(e) => setCost(e.target.value)}
                                    required
                                />
                                <span className="col fa-solid fa-dollar-sign col-2 p-3 mb-2" />
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='hora'>Hora de la cita </label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className=" col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                    placeholder="ingrese la hora de la cita"
                                    type="time"
                                    id="hora"
                                    name="hora"
                                    value={hora}
                                    onChange={(e) => setTime(e.target.value)}
                                    required/>
                                <span className="col fa-regular fa-credit-card col-2 p-3 mb-2" />
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <div className="form-group">
                            <label htmlFor='fecha'>fecha de la cita</label>
                                <div className='d-flex justify-content-center align-items-center'>
                                <input
                                    className=" col form-control shadow-sm p-2 mb-2 bg-white rounded"
                                    placeholder="Ingrese la fecha en formato dd/mm/aaaa"
                                    type="date"
                                    id="fecha"
                                    name="fecha"
                                    value={fecha}
                                    onChange={(e) => setfecha(e.target.value)}
                                    required/>
                                <span className="col fa-solid fa-calendar-days col-2 p-3 mb-2" />
                                </div>
                            </div>
                            </div>
                            <div className="card-footer text-center">
                                <button type="submit" className="btn btn-block btn-primary">Editar cita</button> 
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
export default EditCita