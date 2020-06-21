import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00',
        }
    }

    componentWillMount() {

    }
    
    componentDidMount(){
        setInterval( () =>{
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        },1000);
    }

    componentDidUpdate(){
        console.log('Atualiza')
    }

    componentWillUpdate(){

    }

    componentWillUnmount(){

    }


    render(){
        return (
            <div>
                <br></br>
                Hello {this.state.hora}
            </div>
        )
    }
}

export default App