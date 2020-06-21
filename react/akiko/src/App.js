import React, {Component} from 'react';
import './style/style.css'
import TodoList from'./components/TodoList'
import Routes from './routes'

class App extends Component{
  constructor(props){
      super(props)
      this.state ={
      }
     
  }

  

    render(){
        return (
            <div className = "container">
                <Routes/>
                <h1>To do List</h1>
                <TodoList/>
            </div>
        )
    }
}

export default App