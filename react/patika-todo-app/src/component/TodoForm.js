import React from "react";
import "./TodoForm.css";

function TodoForm({ task, setTask, todos, setTodos }) {
    function handleChange(e) {
        setTask(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (task !== "") {
            setTodos([
                ...todos,
                { text: task, completed: false, id: Math.random() * 1000 },
            ]);
            setTask("");
        }
    }

    return (
        <div className="todo-container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-controls">
                    <label htmlFor="todo">
                        <h1>Todo App</h1>
                    </label>
                    <input
                        onChange={handleChange}
                        value={task}
                        type="text"
                        id="todo"
                        className="todo"
                    />
                </div>
                <button type="submit" className="button">
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default TodoForm;
