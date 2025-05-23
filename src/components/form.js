import React from 'react';

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

    //This enables you to write in the input box and see what you're typing, otherwise it wouldn't show any text
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    
    return (
        <form className="d-flex jc ai-c">

            <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Add a task..." className="todo-input"/>

            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

        </form>
    );
}

export default Form;