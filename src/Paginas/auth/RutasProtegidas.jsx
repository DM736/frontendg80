import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import Alert from '../../Extencion/Aviso';


const RutasProtegidas = ({ element }) => {
const [redirec , setRedirec ] = useState(false);

const TokVen = () =>{
    const token = localStorage.getItem("token");
  if(!token){
    //validar si no hay token si true enviara ala pagina principal
    setRedirec(true);
    return;
  }
  const tokenD = JSON.parse(atob(token.split(".")[1]));
  const timeexp = tokenD.exp * 1000; //  conevertimos a milisegundos

//  obtener  hora actual
const actualTime = Date.now();

if(actualTime >= timeexp){
    const msg="Su sesion ha expirado, porfavor  vuelva a inicar sesion";
    Alert(msg, "Informacion", "warning","#F2D544");
    setTimeout(() =>{
        localStorage.removeItem("token");
        setRedirec(true);
    }, 1000);
    return;
}
};
 // verificamos tiempo de expiracion cuando se monta el componente
 useEffect(() => {
    const timeout = setInterval(TokVen, 100);
    return() =>clearInterval(timeout);// el limpia al desmontar el componente
}, []);

if(redirec){
    return <Navigate to="/login"/>
}
//reenderizamos la ruta
 return element;
};

export default RutasProtegidas