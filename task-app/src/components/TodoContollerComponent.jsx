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
    }

    handleInputChange(e){
        this.setState({
            inputValue : e.target.value
        })
    }

    addTasks(e){
        e.preventDefault()
        const prevState = this.state.tasks
        console.log(prevState)
        const newTask = {'id' : uuid(), 'title' : this.state.inputValue}

        this.setState({
            tasks : [...prevState, newTask],
            inputValue : "",
        })
    }

    render(){
        return (
            <>  
                <AddTodo addTask={(event) => this.addTasks(event)} inputField={this.state.inputValue} handleChange={this.handleInputChange}  />

                <div className="todo-controller">
                    {this.state.tasks.map((task) => 
                        <Fragment key={task.id}>
                            <Todo title={task.title} />
                        </Fragment>
                    )}
                </div>
            </>
        )
    }
}