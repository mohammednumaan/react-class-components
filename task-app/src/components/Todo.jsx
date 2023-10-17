import { Component } from "react";
import '../styles/todo.css'

export default class Todo extends Component{
    constructor(props){
        super(props)

        this.state = {
            editableTodo : "",
            editableValue : ""
        }
    }

    render(){
        return (
            <>
                <div className="todo-container">
                    <div className="all-tasks-container">
                        <p className="tasks">{this.props.title}</p>
                        <button id="edit-todo-button">Edit</button>
                    </div>
                    
                </div>
            </>
        )
    }
}