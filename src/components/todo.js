import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    const completedHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item; 
        }))
    }

    return (
        <div className="todo d-flex jc ai-c">

            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            
            <button onClick={completedHandler} className={`complete-btn ${todo.completed ? "success" : ""}`}>
                <i className="fas fa-check"></i>
            </button>
            
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>x
            </button>
            
        </div>
    );
}

export default Todo;