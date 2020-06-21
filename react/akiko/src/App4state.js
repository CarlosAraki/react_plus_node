import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: 'Carlos',
            cont: 0
        }

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.cont += 1;
        this.setState(state);
    }

    diminuir(){
        let state = this.state;
        state.cont -= 1;
        state.cont = (state.cont < 0) ? 0 : state.cont;
        this.setState(state);
    }

    render(){
        return (
            <div>
                <h3>{this.state.cont}</h3>
                Hello {this.state.nome}
                <br></br>
                <button onClick = {this.aumentar}> + </button>
                <button onClick = {this.diminuir}> - </button>
            </div>
        )
    }
}

export default App