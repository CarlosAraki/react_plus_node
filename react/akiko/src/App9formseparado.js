import React, {Component} from 'react';

class App extends Component{
  constructor(props){
      super(props)
      this.state ={
          form:{
            email:'',
            senha:'',
            nome :''
          }
      }
      this.cadastrar = this.cadastrar.bind(this)
      this.dadosForm = this.dadosForm.bind(this)
  }

  cadastrar(event){
        const{nome,email,senha} = this.state
        alert("aaaa")
        event.preventDefault();
  }

  dadosForm(event){
    let form = this.state.form
    form[event.target.name] = event.target.value
    this.setState({form:form})
  }
 

    render(){
        return (
            <div>
                <h2>
                    Novo Usuário
                </h2>
                <form>
                    <label>Nome:</label>
                    <input type = "text" name="nome" value ={this.state.form.nome} 
                        onChange = {this.dadosForm}/>
                    <br/>
                    <label>Email:</label>
                    <input type = "email" name="email" value ={this.state.form.email} 
                        onChange = {this.dadosForm}/>
                    <br/>
                    <label>Senha:</label>
                    <input type = "password" name="senha" value ={this.state.form.senha} 
                        onChange = {this.dadosForm}/>
                    <br/>
                    <button type = "submit" onClick = {this.cadastrar}>Submeter</button>
                </form>
            </div>
        )
    }
}

export default App