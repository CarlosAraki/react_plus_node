import React,{ Component} from 'react';
import TodoItens from'../TodoItens'


class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            task:'',
            itens:[]
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(e){
        let state =  this.state;
        if(this.state.task != ''){
            let item = {
                text : state.task,
                key : Date.now()
            }
            state.itens.push(item)
            this.setState(state)
        }
        this.setState({task:''})
        e.preventDefault();
    }

    deleteItem(key){
        let state =  this.state;
        let filtro = state.itens.filter((r)=>
        {
           return(r.key != key)
        })
        this.setState({itens:filtro})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input type = "text" placeholder = "New Task?" name="task" value={this.state.task}
                    onChange = {(e)=>{
                        this.setState({task:e.target.value})
                    }}/>
                    <button type="submit"> Adicionar</button>
                    <br/>
                    <TodoItens lista = {this.state.itens} deleteItem = {this.deleteItem} />
                </form>
            </div>
        )
    }
}


export default TodoList