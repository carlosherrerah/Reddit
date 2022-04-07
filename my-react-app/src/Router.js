import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Importar componentes
import Crear from './components/Crear';
import Ver from './components/Ver';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>

                {/* <Header /> */}

                {/* CONFIGURAR RUTAS Y PÁGINAS */}
                <Switch>
                    <Route exact path="/" component={Crear} />
                    <Route exact path="/ver" component={Ver} />
                </Switch>

                <div className="clearfix"></div>
                {/* <Footer /> */}
            </BrowserRouter>
        );
    }
}

export default Router;