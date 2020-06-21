import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Sobre extends Component{
    constructor(props){
        super(props)
        this.state ={
        }
    }
  
      render(){
          return (
              <div >
                  Sobre
                  <br/>
                  <Link to='/'>Ir para home</Link>

              </div>
          )
      }
  }
  
  export default Sobre