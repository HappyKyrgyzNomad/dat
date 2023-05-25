import React, { useState, useEffect } from "react";
import MyTemplates from "./assets/MyTemplates";

function AddTemplate({ setAddNewTemplate, setContent }) {
  const [title, setTitle] = useState(
    localStorage.getItem("titleNewTemplate") || ""
  );
  const [subject, setSubject] = useState(
    localStorage.getItem("subjectNewTemplate") || ""
  );
  const [text, setText] = useState(
    localStorage.getItem("textNewTemplate") || ""
  );

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    localStorage.setItem("titleNewTemplate", value);
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSubject(value);
    localStorage.setItem("subjectNewTemplate", value);
  };

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    localStorage.setItem("textNewTemplate", value);
  };

  const handleSubmit = () => {
    setContent(text);
    // setShowModal(true);
    setAddNewTemplate(false);
  };

  useEffect(() => {
    const storedTitle = localStorage.getItem("titleNewTemplate");
    const storedSubject = localStorage.getItem("subjectNewTemplate");
    const storedText = localStorage.getItem("textNewTemplate");

    if (storedTitle) setTitle(storedTitle);
    if (storedSubject) setSubject(storedSubject);
    if (storedText) setText(storedText);
  }, []);
  const show = false;

  return (
    <div>
      <div>
        <div>
          <h1>Add Template</h1>
          <h2>Title of Template</h2>
          <input
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <h2>Subject</h2>
          <input type="text" value={subject} onChange={handleSubjectChange} />
          <h2>Text</h2>
          <input type="text" value={text} onChange={handleTextChange} />

          <div className="modal-buttons">
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => setAddNewTemplate(false)}>Cancel</button>
          </div>
        </div>
      </div>

      <div>
        {<MyTemplates title={title} setContent={setContent} text={text} />}
      </div>
    </div>
  );
}

export default AddTemplate;
