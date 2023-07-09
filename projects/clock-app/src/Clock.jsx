import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h1 className="clockStyled">{date.toLocaleTimeString()}</h1>;
}
