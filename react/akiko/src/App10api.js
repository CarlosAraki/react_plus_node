import React, {Component} from 'react';
import './style/style.css'


class Botao extends Component {
    render(){
        return(
            <div>
                <button className="btn" onClick = {this.props.acaoBtn}>De Poke blocks para ele</button>
            </div>
        )
    }
}


class App extends Component{
  constructor(props){
      super(props)
      this.state ={
          frase:''
      }
      this.avisos = [
          'Ele Gostou',
          'Ele não gostou',
          'Ele ta cheio, mas come mais']
      this.acao = this.acao.bind(this)
  }

    componentDidMount(){
        let url = 'www.api.com'
        fetch(url)
        .then((r)=>r.json)
        .then((json) =>{
            console.log(json,'Json certinho')
        })
    }  
    acao(){
        let n = Math.floor(Math.random() * this.avisos.length )
        this.setState({frase:this.avisos[n]})
    }

    render(){
        return (
            <div className = "container">
                <Botao acaoBtn={this.acao}/>
                <h3>{this.state.frase}</h3>
                <img src = {require('./assets/totoo.png')} className ='img' />
            </div>
        )
    }
}

export default App