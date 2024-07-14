import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import APIInvoke from "../../configuracion/APIInvoke";
import Alert from "../../Extencion/Aviso";


const Registro = () => {
    const nav = useNavigate()
    const [usuario, setUsuario] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmar: "",
        registro: ""
    });
    const { nombre, email, password, confirmar} = usuario;
    const oneChange = (e) => {
        setUsuario({
            ...usuario, [e.target.name]: e.target.value
        })
    }
    const regist = ()=>{
        const hoy = new Date();
        const año = hoy.getFullYear();
        const mes = ('0' + (hoy.getMonth() + 1)).slice(-2);
        const dia = ('0' + hoy.getDate()).slice(-2);
        return `${año}-${mes}-${dia}`;
    }

    useEffect(() => {
        document.querySelector("#nombre").focus();
    }, []);
    const RegistroCuenta = async ()=> {
        if (password !== confirmar) {
            const msg = "Las contraseñas son diferentes"
            Alert(msg, "Informacion", "warning","#F2D544");
        } else if (password.length < 10) {
            const msg = "La contraseña debe tener minimo 10 caracteres"
            Alert(msg, "Error", "error","#DC3545");
        } else {
            const data = {
                nombre: usuario.nombre,
                email: usuario.email,
                password: usuario.password,
                registro: regist()
            }
            const response = await APIInvoke.invokePOST('/api/usuarios', data);
            const mensaje = response.msg
            if (mensaje === 'El usuario ya existe') {
                const msg = 'El usuario ya existe';
                Alert(msg, "Informacion", "warning","#F2D544");
            }else{
                const msg = 'El usuario fue creado correctamente'; 
                Alert(msg, "Informacion", "success","#198754");
                setUsuario({
                    nombre: '',
                    email: '',
                    password: '',
                    confirmar: ''
                })
            }
        }
    }
    const oneSubmit = (e) => {
        e.preventDefault();
        RegistroCuenta();
    }
    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Crear</b> Usuarios</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Ingreso los datos de usuario</p>
                    
                        <form onSubmit={oneSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    className="form-control"
                                    placeholder="Nombre"
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={oneChange}
                                    required
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
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
                            <div className="input-group mb-3">
                                <input
                                    className="form-control"
                                    placeholder="Confirmar Contraseña"
                                    type="password"
                                    id="confirmar"
                                    name="confirmar"
                                    value={confirmar}
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
                                <button type="submit" className="btn btn-block btn-primary">Crear Cuenta</button>
                                <Link to={"/"} className="btn btn-block btn-danger">Regresar al login</Link>
                            </div>
                        </form>
                </div>
                </div>





            </div>
        </div>
    )
}
export default Registro