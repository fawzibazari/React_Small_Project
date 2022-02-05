import { React, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CheckBox from "../Checkbox/Checkbox";
import Search from "../Search/Search";
import style from "./Task.module.css";

function Todo({ todo, deleteTodo, index, setTodos }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className={style.container}>
        <div className={style.hi}>
          <p>{todo.text}</p>
          <CheckBox checked={checked} onChange={(val) => setChecked(val)} />
          <button className={style.delete} onClick={() => deleteTodo(index)}>
            x
          </button>
        </div>
      </div>
    </>
  );
}
export default function Task() {
  const reorder = (todos, startIndex, endIndex) => {
    const result = Array.from(todos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result, todo) => {
    if (!result.destination) {
      return result;
    }
    const items = reorder(todo, result.source.index, result.destination.index);

    setTodos(items);
  };
  const [todos, setTodos] = useState([
    { text: "Mugiwara" },
    { text: "Luffy" },
    { text: "Ace" },
  ]);
  const addTodo = (name) => {
    setTodos([{ text: name }, ...todos]);
    console.log(name);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <Search addTodo={addTodo} />  
    {todos.map((todo, index) => (                           
      <Todo
      key={index}
      index={index}
      todo={todo}
      deleteTodo={deleteTodo}
      setTodos={setTodos}
      />
                           
     
    ))}
        
    </>
  );
}
