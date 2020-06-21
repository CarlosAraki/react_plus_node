import React, {Component} from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                <p>Nome:{this.props.nome}</p>
                <p>Cargo:{this.props.cargo}</p>
                <Social face = {this.props.face}/>
                <hr></hr>
            </div>
        )
    }
}


class Social extends Component{
    render(){
        return(
            <div>
                <a href = {this.props.face} >Face</a>
            </div>
        )
    }
}

const CompBurro = () =>{
    return (
        <p>HAHAHAHA</p>
    )
}

function App(){
    return(
        <div> 
            <h1>Conheça nossa equipe</h1>
            <Equipe nome = 'Matheus' cargo = 'programador' face = 'http://www.google.com' />
            <Equipe nome = 'Matheus' cargo = 'programador' face = 'http://www.google.com' />
            <CompBurro/>
        </div>
    ); 
}

export default App;