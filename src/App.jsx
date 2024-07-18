import { Fragment } from 'react'
import { Home } from './Home'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Registro from './Paginas/auth/Registro'
import Inicio from './Paginas/auth/Login'
import Mosclientes from './Paginas/modulos/Mosclientes'
import AddNClientes from './Paginas/modulos/Addclientes'
import EditClientes from './Paginas/modulos/Edicliente'
import RutasProtegidas from './Paginas/auth/RutasProtegidas'
import ShowCompra from './Paginas/modulos/Moscompras'
import AddNewCompra from './Paginas/modulos/AddCompras'
import EditCompras from './Paginas/modulos/Edicompra'
import MosCitaMed from './Paginas/modulos/Moscita'
import EditCita from './Paginas/modulos/Edicita'
import AddNewCita from './Paginas/modulos/Addcita'
function App() {
 
//<Route path="/" exact element={<Inicio/>}/>
  return (
    <div className='App'>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Navigate to="/login"/>}/>
            <Route path="/login" exact element={<Inicio/>}/>
            <Route path="/registro" exact element={<Registro/>}/>
            <Route path="/home" exact element={<RutasProtegidas element= {<Home/>}/>}></Route>
            
            <Route path="/clientes" exact element={<RutasProtegidas element= {<Mosclientes/>}/>}/>
            <Route path="/clientes/agregar" exact element={<RutasProtegidas element= {<AddNClientes/>}/>}/>
            <Route path="/clientes/editar/:id" exact element={<RutasProtegidas element= {<EditClientes/>}/>}/>

            <Route path="/compras" exact element={<RutasProtegidas element= {<ShowCompra/>}/>}/>
            <Route path="/compras/agregar" exact element={<RutasProtegidas element= {<AddNewCompra/>}/>}/>
            <Route path="/compras/editar/:id" exact element={<RutasProtegidas element= {<EditCompras/>}/>}/>

            <Route path="/citas" exact element={<RutasProtegidas element= {<MosCitaMed/>}/>}/>
            <Route path="/citas/agregar" exact element={<RutasProtegidas element= {<AddNewCita/>}/>}/>
            <Route path="/citas/editar/:id" exact element={<RutasProtegidas element= {<EditCita/>}/>}/>
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  )
}


export default App
