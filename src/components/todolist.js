import React from 'react';

//Importing Components
import Todo from './todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return (
        <div className="todo-container">

            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        setTodos={setTodos}
                        todos={todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text} 
                        id={todo.id}
                    />
                ))}
            </ul>

        </div>
    );
};

export default TodoList;