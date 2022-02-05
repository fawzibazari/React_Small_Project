import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CheckBox from "../Checkbox/Checkbox";
import Search from "../Search/Search";
import style from "./Task.module.css";

const Ace = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb: "/images/cato.png",
  },
  {
    id: "kvn",
    name: "KVN",
    thumb: "/images/kvn.png",
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb: "/images/mooncake.png",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb: "/images/quinn.png",
  },
];
function Todo({ todo, deleteTodo, index, setTodos, name }) {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className={style.container}>
        <div className={style.hi}>
          <p>{name}</p>
          <CheckBox checked={checked} onChange={(val) => setChecked(val)} />
          <button className={style.delete} onClick={() => deleteTodo(index)}>
            x
          </button>
        </div>
      </div>
    </>
  );
}
function Test() {
  const [todos, setTodos] = useState(Ace);
  const addTodo = (name) => {
    setTodos([{ name: name, id: (todos.length + 1).toString() }, ...todos]);
    console.log(name);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  }
  //   const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <Search addTodo={addTodo} />

      <header className="App-header">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todos.map((todo, index) => {
                  return (
                    <Draggable key={todo.id} draggableId={todo.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            setTodos={setTodos}
                            name={todo.name}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default Test;
