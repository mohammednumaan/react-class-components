import { Component, Fragment } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export default class TodoController extends Component{
    constructor(props){
        super(props);

        this.state = ({
            tasks : [{'id' : uuid(), 'title':'Test Task One' }],
            inputValue : "",
        })

        this.handleInputChange = this.handleInputChange.bind(this)
        this.editTasks = this.editTasks.bind(this)
    }

    handleInputChange(e){
        this.setState({
            inputValue : e.target.value
        })
    }

    addTasks(e){
        e.preventDefault()
        const prevState = this.state.tasks
        const newTask = {'id' : uuid(), 'title' : this.state.inputValue}

        this.setState({
            tasks : [...prevState, newTask],
            inputValue : "",
        })
    }

    editTasks(id, title){
        const prevState = this.state.tasks 
        this.setState({
            tasks : prevState.map(task => task.id === id ? Object.assign({}, task, {title}) : task)
        })
    }

    render(){
        return (
            <>  
                <AddTodo addTask={(event) => this.addTasks(event)} inputField={this.state.inputValue} handleChange={this.handleInputChange}  />

                <div className="todo-controller">
                    <Todo 
                    todos={this.state.tasks} 
                    editTasks={this.editTasks}
                    />
                </div>
            </>
        )
    }
}