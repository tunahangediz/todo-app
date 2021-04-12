import React from "react";
import "./todolist.css";
import { MdDeleteForever } from "react-icons/md";

function TodoList({ todos, setTodos }) {
    function deleteTodo(id) {
        const newTodo = todos.filter((todo) => todo.id !== id);
        setTodos(newTodo);
    }

    const updateCompleted = (id, e) => {
        if (
            e.target.className === "todo-div false" ||
            e.target.className === "todo-div true"
        ) {
            const newTodo = todos.filter((todo) => {
                if (todo.id === id) {
                    todo.completed
                        ? (todo.completed = false)
                        : (todo.completed = true);
                    return todo;
                } else {
                    return todo;
                }
            });

            setTodos(newTodo);
        }
    };
    return (
        <>
            {todos.map((todo) => {
                return (
                    <div
                        onClick={(e) => updateCompleted(todo.id, e)}
                        key={todo.id}
                        className={"todo-div " + todo.completed}
                    >
                        {todo.text}{" "}
                        <MdDeleteForever
                            onClick={() => deleteTodo(todo.id)}
                            className="delete"
                        />
                    </div>
                );
            })}
        </>
    );
}

export default TodoList;
