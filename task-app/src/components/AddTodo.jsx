import { Component } from "react";
import '../styles/addTodo.css'

export default class AddTodo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <div className="add-todo-container">
                    <input value={this.props.inputField} id="add-todo-input" type="text" placeholder="Your Task..." onChange={this.props.handleChange} required></input>
                    <button  id="submit-todo" onClick={this.props.addTask}>Add +</button>
                </div>
            </>
        )
    }

}