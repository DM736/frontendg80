import React,{useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import ContentHeader from '../../Componentes/ContentHeader'
import Footer from '../../Componentes/Footer'
import Navbar from '../../Componentes/Navbar'
import SidebarContainer from '../../Componentes/SidebarContainer' 
import APIInvoke from "../../configuracion/APIInvoke"
import Alert from '../../Extencion/Aviso'



const EditCompras = () => {

    const[nombreComprador, setComprador] = useState('');
    const[numeroProductos, setProductos] = useState('');
    const[total, setTotal] = useState('');
    const[medioDPago, setPago] = useState('');
    const[nombreTienda, setTienda] = useState('');
    const[fecha, setfecha] = useState('');
    const {id} = useParams();
    const nav= useNavigate()

     const UpdaCompras = async (e) => {
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/compras/${id}`, {
            nombreComprador: nombreComprador, numeroProductos: numeroProductos, 
            total:total, medioDPago:medioDPago, nombreTienda: nombreTienda, fecha:fecha
        })
        nav('/compras');
        const msg="El cambio fue exitoso";
        Alert(msg, "Informacion", "success","#198754");
    }
    const getCompras = async ()=> {
        const res = await APIInvoke.invokeGET(`/api/compras/${id}`);
        setComprador(res.nombreComprador),setProductos(res.numeroProductos),
        setTotal(res.total),setPago(res.medioDPago),setTienda(res.nombreTienda),setfecha(res.fecha)
    }

    useEffect(() => {
        getCompras()

    }, []);
  return (
    <div className='wrapper'>
        <Navbar
            rot={"/compras/editar/:id"}
        />
        <SidebarContainer 
            ruta={"/compras/editar/:id"}
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
                        <form onSubmit={UpdaCompras}>
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
                                    onChange={(e) => setComprador(e.target.value)}
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
                                        type="text"
                                        id="numeroProductos"
                                        name="numeroProductos"
                                        value={numeroProductos}
                                        onChange={(e) => setProductos(e.target.value)}
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
                                    onChange={(e) => setTotal(e.target.value)}
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
                                    onChange={(e) => setPago(e.target.value)}
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
                                    onChange={(e) => setTienda(e.target.value)}
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
                                    onChange={(e) => setfecha(e.target.value)}
                                    required/>
                                <span className="col fa-solid fa-calendar-days col-2 p-3 mb-2" />
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
export default EditCompras