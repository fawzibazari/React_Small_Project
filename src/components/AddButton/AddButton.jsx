import React from 'react';
import style from "./AddButton.module.css";

// import style from "./Checkbox.module.css";

export default function AddButton(props) {

  return (
    <div className={style.button}>
<button onClick={props.onClick} className={style.button65}>+</button>

</div>
  )
}
