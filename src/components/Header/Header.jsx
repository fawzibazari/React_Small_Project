import { useState } from "react";
import style from "./Header.module.css";

export default function Header(props) {
    let time = new Date().toLocaleTimeString();
    let [ctime, setCTime] = useState();
    const updateTime = () => {
      time = new Date().toLocaleTimeString();
      setCTime(time);
    }
    setInterval(updateTime, 1000);

  
  return (
    <>
    <header data-testid="test_header" className={style.hello}>
      <p className={style.Boss2}>{props.title}</p>
      <div className={style.Boss}><p className={props.text}>{ctime}</p></div>
      </header>
    </>
  );
}
