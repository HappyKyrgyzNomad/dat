import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ExportHtml from "./ExportHtml/ExportHtml";
import rehypeParse from "rehype-parse/lib";

function Preview({ dest, origin, content, subject }) {
  // Экспортируем HTML
  const exportHtmlData = {
    subject: subject,
    content: content,
  };

  return (
    <div>
      <h1>Receiver will get</h1>
      <h4 style={{ textAlign: "left" }}>Subject:</h4>
      <p>{subject}</p>
      <h4>Body: </h4>
      <ReactMarkdown remarkPlugins={[rehypeParse]}>{content}</ReactMarkdown>
      <ExportHtml exportHtmlData={exportHtmlData} />
    </div>
  );
}
export default Preview;
