import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import swal from 'sweetalert2';
import 'moment/locale/es';


class Create extends Component {

    url = Global.url

    state = {
        usuarios: [],
        status: null
    };

    componentDidMount() {
        this.getForm();
    }


    getForm = () => {

        axios.get(this.url + 'usuario')
            //Capturar la respuesta
            .then(res => {
                this.setState({
                    usuarios: res.data.datos,
                    status: 'success'
                });
            }).catch(err => {
                this.setState({
                    usuarios: false,
                    status: 'success'
                });
            });
    }



    deleteForm = async (id) => {
        try {
            const willDelete = await swal.fire({
                title: "¿Estas seguro?",
                text: "Borrarás permanentemente tu articulo",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });

            if (willDelete) {
                await axios.delete(this.url + 'borrar/' + id);

                const { data } = await axios.get(`${this.url}usuario`);

                this.setState({
                    usuarios: data.datos,
                    status: 'deleted'
                });

                swal.fire(
                    'Articulo borrado',
                    'El articulo ha sido borrado correctamente',
                    'success'
                );
            }
        } catch (e) {
            swal.fire(
                'Tranquilo!!',
                'No se ha borrado nada correctamente',
                'success'
            );
        }
    }











    render() {

        return (
            <div className='blog'>
                <h1> Datos de los Usuarios </h1>
                {
                    this.state.usuarios
                        // Ordeno los datos por orden de id
                        // .sort((a, b) => a.id - b.id)
                        .map((user) => (
                            <div key={user._id} className='flex'>
                                <div className='results grid'>
                                    <li>
                                        {'Nombre: '+user.Nombre}
                                    </li>
                                    <li>
                                        {'Usuario: '+user.Usuario}
                                    </li>
                                    <li>
                                        {'Correo: '+user.Email}
                                    </li>
                                    <li>
                                        {'Contraseña: '+user.Contraseña}
                                    </li>
                                </div>
                            </div>
                        ))
                }
                <div id="botones">
                    <Link to={"/"} className="Boton">Regresar</Link>
                </div>
            </div>
        );
    }
}

export default Create;