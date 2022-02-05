import { React, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CheckBox from "../Checkbox/Checkbox";
import Search from "../Search/Search";
import style from "./Task.module.css";

const Ace = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: '/images/kvn.png'
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: '/images/mooncake.png'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: '/images/quinn.png'
  }
]

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
  // const reorder = (todos, startIndex, endIndex) => {
  //   const result = Array.from(todos);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);

  //   return result;
  // };

  // const onDragEnd = (result, todo) => {
  //   if (!result.destination) {
  //     return result;
  //   }
  //   const items = reorder(todo, result.source.index, result.destination.index);

  //   setTodos(items);
  // };

  const [checked, setChecked] = useState(false);

  const [todos, setTodos] = useState([]);
  const addTodo = (name) => {
    setTodos([{ text : name}, ...todos]);
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
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.map((todo, index) => (
                <Draggable key={index} draggableId={index} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                     <div className={style.container}>
        <div className={style.hi}>
          <p>{todo.text}</p>
          <CheckBox checked={checked} onChange={(val) => setChecked(val)} />
          <button className={style.delete} onClick={() => deleteTodo(index)}>
            x
          </button>
        </div>
      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
