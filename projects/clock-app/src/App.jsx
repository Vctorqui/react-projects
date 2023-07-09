import React, { useState } from "react";
import "./App.css";
import { Clock } from "./Clock";

export function App() {
  return (
    <section className="clockApp">
      <Clock />;
    </section>
  );
}
