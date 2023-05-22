import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TextEditor from "./TextEditor";

//почему-то вместо "App" сделал "TextEDitor" извиняюсь за это , но я это заметил в самый последний момент
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TextEditor />
  </React.StrictMode>
);
