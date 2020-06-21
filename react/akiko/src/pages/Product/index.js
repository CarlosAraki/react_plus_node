import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component{
    constructor(props){
        super(props)
        this.state ={
            id : ''
        }
    }

    componentDidMount(){
        const {id} =this.props.match.params;

        this.setState({
            id : id
        })
        
    }
  
      render(){
          return (
              <div >
                  Product {this.state.id}
                  <br/>
              </div>
          )
      }
  }
  
  export default Product