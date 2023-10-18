import { Component, Fragment } from "react";
import '../styles/todo.css'

export default class Todo extends Component{
    constructor(props){
        super(props)

        this.state = {
            editableTodo : "",
            editableValue : ""
        }

        this.handleEditChange = this.handleEditChange.bind(this)
        this.makeTaskEditable = this.makeTaskEditable.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEditChange(e){
        this.setState({
            editableValue : e.target.value,
        })
    }

    handleEdit(id, title){
        this.props.editTasks(id, title)
        this.setState({
            editableTodo: "",
        })
    }

    makeTaskEditable(title, id){
        this.setState({
            editableValue : title,
            editableTodo : id,
        })
    }

    render(){
        return (
            <>  

                {this.props.todos.map((task => {
                    if (this.state.editableTodo === task.id){
                        return (
                            <Fragment key={task.id}>
                                <div className="all-task-container">
                                    <input id="edit-todo-input" type="text" value={this.state.editableValue} onChange={(event) => this.handleEditChange(event)}></input>
                                    <button id="resave-todo-button" onClick={() => this.handleEdit(task.id, this.state.editableValue)}>Save</button>
                                </div>
                        </Fragment>
                        )
                    }
                    else{
                        return (
                            <Fragment key={task.id}>
                                <div className="all-task-container">
                                    <p className="tasks">{task.title}</p>
                                    <button id="edit-todo-button" onClick={() => this.makeTaskEditable(task.title, task.id)}>Edit</button>
                                </div>
                            </Fragment>
                        )
                    }
                }))}  

            </>
        )
    }
}