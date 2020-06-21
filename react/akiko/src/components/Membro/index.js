import React,{ Component} from 'react'

class Membro extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome:props.nome,
            status:true
        }
        this.entrar = this.entrar.bind(this)
        this.sair = this.sair.bind(this)
    }

    entrar(){
        this.setState({
                nome : "carlos",
                status:false
            }
        )
    }

    sair(nome){
        this.setState({
                nome : nome,
                status:true
            }
        )
    }

    render(){
        return(
            <div>
                {this.state.nome}
                <br></br>
                <button onClick ={this.entrar} >AQUI</button>
                <button onClick ={ () => this.sair('Gabriel')} >Sair</button>
                {this.state.status?
                    <h1>AQUI</h1>
                    :
                    <h2>Aqui</h2>
                }
            </div>
        )
    }
}


export default Membro