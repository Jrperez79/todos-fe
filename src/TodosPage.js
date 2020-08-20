import React, { Component } from 'react'
import { fetchTodos, deleteTodos, createTodos, updateTodos } from './todos-api.js';


export default class TodosPage extends Component {
    state = {
        todos: []
    }

    componentDidMount = async () => {
        if (!this.props.token) {
            this.props.history.push('/login');
        } else {
            const data = await fetchTodos(this.props.token)

            this.setState({
                todos: data.body
            })
        }
    }

    handleTodoListChange = e => {
        this.setState({ todo: e.target.value });
    }

    handleCompletedTodo = async (id, todo) => {
        await updateTodos(
            id,
            {
                todo: todo.todo,
                completed: true
            }
        );

        const data = await fetchTodos(this.props.token)

        this.setState({ todos: data.body })
    }

    handleDelete = async (id) => {
        await deleteTodos(id);

        const data = await fetchTodos(this.props.token)

        this.setState({ todos: data.body })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createTodos({
                todo: this.state.todo,
                completed: false
            });

            this.setState({
                todo: '',
            });

            const data = await fetchTodos(this.props.token)

            this.setState({ todos: data.body })
        } catch(e) {
            return { error: e.message }
        }
    }
    
    render() {
        return (
            <div>
                <h2 className="title">Your ToDo List</h2>
                <div className="todo-list">
                    {
                        this.state.todos.map((todo) => {
                            if(todo.completed === false) {
                                return <div>
                                    <p>Todo Item: {todo.todo}</p>
                                    <button className="completed" onClick={() => this.handleCompletedTodo(todo.id, todo)}>Mark Todo As Completed</button>
                                    <button onClick={() => this.handleDelete(todo.id)}>Delete Todo Item</button>
                                </div>
                            } else {
                                return <div>
                                    <p>Todo Item: {todo.todo}</p>
                                    <button onClick={() => this.handleDelete(todo.id)}>Delete Todo Item</button>
                                </div>
                            }
                        })
                    }
                </div>
                <div>
                    <h4 className="add-todo-title">Add A Todo List Item</h4>
                    <form className="add-todo" onSubmit={this.handleSubmit}>
                        <label>
                            Todo Item: 
                            <input onChange={this.handleTodoListChange}/>
                        </label>
                        <button>Create New Todo Item</button>
                    </form>
                </div>
            </div>

        )
    }
}
