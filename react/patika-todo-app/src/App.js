import "./App.css";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import { useState } from "react";

function App() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="App">
            <TodoForm
                task={task}
                setTask={setTask}
                setTodos={setTodos}
                todos={todos}
            ></TodoForm>
            <TodoList todos={todos} setTodos={setTodos}></TodoList>
        </div>
    );
}

export default App;
