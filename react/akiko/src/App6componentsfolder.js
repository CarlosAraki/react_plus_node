import React, {Component} from 'react';
import Membro from './components/Membro'
import Membro2 from './components/Membro'

class App extends Component{
  
    render(){
        return (
            <div>
                <Membro nome='aaa' />
                <br></br>
                <Membro2 nome='Roberto' />

            </div>
        )
    }
}

export default App