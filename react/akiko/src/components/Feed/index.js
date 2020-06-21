import React,{ Component} from 'react'

class Feed extends Component{
  


    render(){
        return(
            <div key = {this.props.id} >
                <h1 >{this.props.name}</h1>
            </div>
        )
    }
}


export default Feed