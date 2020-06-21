import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Error extends Component{
    constructor(props){
        super(props)
        this.state ={
        }
    }
  
      render(){
          return (
              <div >
                  Error  Página nao encontrada
                  <br/>
                  <Link to='/sobre'> Ir para sobre</Link>
                  <Link to='/'> Ir para Home</Link>
              </div>
          )
      }
  }
  
  export default Error