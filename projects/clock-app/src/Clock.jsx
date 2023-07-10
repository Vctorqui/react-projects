import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

export function Clock() {
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const [modeDark, setModeDark] = useState(false);
  const changedMode = () => {
    setModeDark(!modeDark);
  };
  const text = modeDark ? "Light Mode" : "Dark Mode";
  const changedDarkMode = modeDark ? "bg-dark modeDark " : "bg-light";

  return (
    <>
      <section className={changedDarkMode}>
        <div className="clockAppDark clockAppLight">
          <h1 className="clockTextDark clockTextLight">
            {date.toLocaleTimeString()}
          </h1>
          <button className="buttonDark buttonLight" onClick={changedMode}>
            <span>{text}</span>
          </button>
        </div>
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
