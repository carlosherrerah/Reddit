import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';

class Home extends Component {


    url = Global.url;
    //Recoger datos
    nombreRef = React.createRef();
    usuarioRef = React.createRef();
    emailRef = React.createRef();
    contraseñaRef = React.createRef();


    state = {
        user: {},
        status: null
    }

    //Modifica el state de forma dinamica
    changeState = () => {
        this.setState({
            user: {
                Nombre: this.nombreRef.current.value,
                Usuario: this.usuarioRef.current.value,
                Email: this.emailRef.current.value,
                Contraseña: this.contraseñaRef.current.value
            }
        });

       

    }




    crearUsuario = (e) => {
        //Bloquear que al enviar el formulario se actualice
        e.preventDefault();

        //Llamar al metodo changeState: Rellenara el state con formulario
        this.changeState();

        if (this.nombreRef.current.value && this.usuarioRef.current.value && this.emailRef.current.value && this.contraseñaRef.current.value) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se ha creado el usuario correctamente',
                showConfirmButton: false,
                timer: 2000
            })
            //Hacer una peticion HTTP por post para guerdar el usuario
            axios.post(this.url + "guardar", this.state.user)
                .then(res => {//res recibir respuesta del api
                    if (res.data.user) {
                        this.setState({
                            user: res.data.user,
                            status: 'success'
                        });
                        
                    } else {
                        this.setState({
                            status: 'failed'

                        })
                    }

                })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Llena todos los campos',
                showConfirmButton: false,
                timer: 2000
            })

        }



    }

    render() {
        return (
            <div class="container-form">
                <div class="header">
                <div><b>Proyecto<span>ISEI</span></b></div>
            </div>

                <form action="" className="login" onSubmit={this.crearUsuario}>

                    <label for="" className="label"></label>
                    <input type="text" placeholder="Nombre Completo" ref={this.nombreRef} onChange={this.changeState} />

                    <label for="" className="label"></label>
                    <input type="text" placeholder="Nombre de Usuario" ref={this.usuarioRef} onChange={this.changeState} />

                    <label for="" className="label"></label>
                    <input type="text" placeholder="Correo Electrónico" ref={this.emailRef} onChange={this.changeState} />
                    
                    <label for="" className="label"></label>
                    <input type="password" placeholder="Contraseña" ref={this.contraseñaRef} onChange={this.changeState} />

                    <div id="botones">
                        <input type="submit" className="Boton" value="Crear Cuenta" />
                    </div>

                    <div id ="botones">
                        <Link to={"/Ver"} className="text2">Ver Cuenta</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Home;