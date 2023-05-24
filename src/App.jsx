import "./App.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Preview from "./Preview";

function App({
  content,
  toDefaultValues,
  subjectParent,
  setSubjectParent,
  origin,
  dest,
}) {
  // Тема письма для превью
  const [subject, setSubject] = useState();

  const handleEditorChangeSubject = (e) => {
    setSubjectParent(e);
    localStorage.setItem("defaultTextSubject", e);
  };

  return (
    <div className="app">
      <div>
        <h4>Subject</h4>
        <input
          className="app-input"
          placeholder="type..."
          onChange={(e) => handleEditorChangeSubject(e.target.value)}
          type="text"
          value={subjectParent}
        />

        <button onClick={toDefaultValues} className="app-btn">
          default values
        </button>
      </div>
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
