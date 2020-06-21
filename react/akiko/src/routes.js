import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Product from './pages/Product'
import Erro from './pages/Error'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/sobre" component={Sobre}/>
                <Route path="/product/:id" component={Product}/>
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes