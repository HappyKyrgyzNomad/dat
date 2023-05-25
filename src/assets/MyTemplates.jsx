function MyTemplates({ setContent, text, title }) {
  const handleEditorChangeTemplate = () => {
    setContent(text);
    // localStorage.setItem("defaultText", newContent);
  };
  return (
    <div>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "1220px",
          backgroundColor: "#3b81f6",
          color: "#fff",
        }}
        onClick={handleEditorChangeTemplate}
      >
        {" "}
        {title}
      </button>
    </div>
  );
}
export default MyTemplates;
