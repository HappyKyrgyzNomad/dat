import React, { useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import App from "./App";
import { createClient } from "@supabase/supabase-js";

function TextEditor() {
  // Бек
  const supabase = createClient(
    "https://hlsgdhbzyjqlpaudruoo.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhsc2dkaGJ6eWpxbHBhdWRydW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTQyODgsImV4cCI6MjAwMDE3MDI4OH0.eUNFmkd8HDTPz2adX_AwTQ03ou40cqoEGX-HlWA0ZYY"
  );

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }
  // Направления
  const origin = countries.map((country) => country.name);
  const dest = countries.map((country) => country.name);

  // состояния для данных ввода
  const [content, setContent] = useState(
    localStorage.getItem("defaultText") || "это дефолт"
  );
  const handleEditorChange = (newContent) => {
    setContent(newContent);
    localStorage.setItem("defaultText", newContent);
  };
  //  quill модули
  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };
  const formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];
  const [subjectParent, setSubjectParent] = useState(
    localStorage.getItem("defaultTextSubject" || "")
  );

  const templateTextSave = () => {
    window.alert("Succesfully saved");
  };

  const toDefaultValues = () => {
    setContent("Это default");
    setSubjectParent(`Load from ${origin} to ${dest}`);

    localStorage.removeItem("defaultText");
    localStorage.removeItem("defaultTextSubject");
  };

  return (
    <div style={{ alignItems: "flex-start" }}>
      <App
        subjectParent={subjectParent}
        toDefaultValues={toDefaultValues}
        content={content}
        setSubjectParent={setSubjectParent}
        origin={origin}
        dest={dest}
      />

      <button onClick={templateTextSave}>save</button>

      <h4 style={{ textAlign: "left" }}>Body</h4>

      <div style={{ display: "grid", justifyContent: "start" }}>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={content}
          onChange={handleEditorChange}
          style={{ height: "220px" }}
        ></ReactQuill>{" "}
      </div>
    </div>
  );
}
export default TextEditor;
