import { React, useState } from 'react';
import AddButton from '../AddButton/AddButton';
import style from "./Search.module.css";


export default function Search({addTodo}) {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    console.log(value)
    e.preventDefault();
    if (!value) return;
    if (value.length > 10) {
      alert("pas plus de 10 caractéres")
    }
    else{
    addTodo(value);
    setValue("");
    }
  }

  const handleChange = e => {
    setValue(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <div>
      <div className={style.cont2}>
 <input type="text" placeholder="Ajouter" onChange={handleChange} className={style.test}/>
 <AddButton onClick={handleSubmit} />
 </div>
</div>
  )
}