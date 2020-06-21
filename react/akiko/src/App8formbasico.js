import React, {Component} from 'react';

class App extends Component{
  constructor(props){
      super(props)
      this.state ={
        email:'',
        senha:'',
        sexo :''
      }
      this.trocaEmail = this.trocaEmail.bind(this)
      this.trocaSenha = this.trocaSenha.bind(this)
  }

  trocaEmail(input){
    let valor = input.target.value;
    this.setState({
        email:valor
    })
  }

  trocaSenha(input){
    let valor = input.target.value;
    this.setState({
        senha:valor
    })
  }

    render(){
        return (
            <div>
                <h2>
                    Login
                </h2>
                Email
                <input type= 'email' name = 'email' value={this.state.email} onChange = {this.trocaEmail}></input>
                <br/>
                Senha
                <input type= 'password' name = 'senha' value={this.state.senha} onChange = {(input) => {this.setState({senha:input.target.value})}}></input>
                <br/>
                <select name= "sexo" value = {this.state.sexo} onChange = {(input)=>{this.setState({sexo:input.target.value})}}>
                    <option value=''>Selecione ...</option>
                    <option value='Masculino'> Masculino</option>
                    <option value='Feminino'> Feminino</option>
                </select>
            </div>
        )
    }
}

export default App