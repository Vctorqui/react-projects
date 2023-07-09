import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

export function Clock() {
  const [date, setDate] = useState(new Date());
  const [dark, setDark] = useState(false);

  const changedMode = () => {
    setDark(!dark);
  };
  const text = dark ? "Light Mode" : "Dark Mode";
  const changedDarkMode = dark
    ? "clockApp dark button-dark"
    : "clockApp button-light";

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <section className={changedDarkMode}>
        <h1 className="clockStyled">{date.toLocaleTimeString()}</h1>
        <button className={changedDarkMode} onClick={changedMode}>
          <span>{text}</span>
        </button>
      </section>
    </>
  );
}
// export function Clock() {
//   let time = new Date().toLocaleTimeString();
//   const [currentTime, setCurrentTime] = useState(time);

//   const updateTime = () => {
//     let time = new Data().toLocaleTimeString();
//     setCurrentTime(time);
//   };

//   setInterval(updateTime, 1000);

//   return <h1 className="clockStyled">{currentTime}</h1>;
// }
