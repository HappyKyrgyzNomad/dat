import React from "react";
import { saveAs } from "file-saver";
import generateHTMLContent from "./generateHtmlContent";

function ExportHtml({ exportHtmlData }) {
  const handleExportClick = () => {
    const htmlContent = generateHTMLContent(exportHtmlData);
    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    saveAs(blob, "exported.html");
  };

  return (
    <button
      style={{
        position: "fixed",
        bottom: "50px",
        right: "280px",
        backgroundColor: "#3b81f6",
        color: "#fff",
      }}
      onClick={handleExportClick}
    >
      Export as HTML
    </button>
  );
}

export default ExportHtml;
