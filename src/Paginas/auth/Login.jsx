import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../configuracion/APIInvoke";
import Alert from '../../Extencion/Aviso';

const Inicio =()=>{
    const naveg =useNavigate();
    const [usuario, setUsuario] = useState({
        email:"",
        password:""
    });
    const {email, password} = usuario;
    const oneChange = (e) => {
        setUsuario({
            ...usuario, [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        document.querySelector("#email").focus();
    }, []);
    const InicioSes = async ()=> {
        if(password.length<10){
            const msg = "La contraseña debe tener minimo 10 caracteres"
            Alert(msg, "Error", "error", "#DC3545");
        }else{
            const data={
                email: usuario.email,
                password: usuario.password
            }
            //exito #198754 error #DC3545
            const response = await APIInvoke.invokePOST('/api/auth', data);
            const mensaje = response.msg;
            if(mensaje === "El usuario no existe" || mensaje === "Contraseña incorrecta"){
                const msg ="No es posible iniciar sesion, porfavor validar sesion";
                Alert(msg, "Error", "error","#DC3545");
            }else{
                const msg ="Inicio de sesion exitoso";
                Alert(msg, "Informacion", "success","#198754");
                //obtener token
                const jwt = response.token
                //guardar token
                localStorage.setItem("token", jwt)
                //logueo
                naveg("/home");

            }
        }
    }
    const oneSubmit = (e) => {
        e.preventDefault();
        InicioSes();
    }
    return(
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Iniciar Sesion</b> </Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Ingrese el usuario</p>
                    
                        <form onSubmit={oneSubmit} >
                            
                            <div className="input-group mb-3">
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={oneChange}
                                    required/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    className="form-control"
                                    placeholder="Contraseña"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={oneChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="social-auth-links text-center">
                                <button type="submit" className="btn btn-block btn-primary">Ingresar</button>
                                <Link to={"/registro"} className="btn btn-block btn-danger">Registrarse</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Inicio;