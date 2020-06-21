import React, {Component} from 'react';
import Feed from './components/Feed'

class App extends Component{
  constructor(props){
      super(props)
      this.state ={
        feed:[
            {
                id:1,
                username:"Carlos",
                curtidas:10,
                comentarios:11
            },
            {
                id:2,
                username:"Roberta",
                curtidas:10,
                comentarios:11
            },
            {
                id:3,
                username:"Paola",
                curtidas:10,
                comentarios:11
            }
        ]
      }
  }

    render(){
        return (
            <div>
                {
                    this.state.feed.map((item) =>
                    {
                        return(
                            <Feed id = {item.id} name = {item.username}/>
                        )
                    })
                }
                <Feed />
            </div>
        )
    }
}

export default App