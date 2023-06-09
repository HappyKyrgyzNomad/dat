import "./App.css";
import { useState, useEffect } from "react";
import AddTemplate from "./AddTemplate";
import Preview from "./Preview";

function App({
  content,

  subjectParent,
  setSubjectParent,
  origin,
  dest,
}) {
  // Тема письма для превью
  const [subject, setSubject] = useState("");

  const handleEditorChangeSubject = (e) => {
    setSubjectParent(e);
    localStorage.setItem("defaultTextSubject", e);
  };

  return (
    <div className="app">
      <Preview
        content={content}
        origin={origin}
        dest={dest}
        subject={subject}
        subjectParent={subjectParent}
        setSubject={setSubject}
      />
    </div>
  );
}

export default App;
