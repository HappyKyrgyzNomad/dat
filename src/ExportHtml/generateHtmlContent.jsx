function generateHTMLContent(data) {
  return `
    <html>
      <head>
        <title>Exported HTML</title>
      </head>
      <body>
        <h1>${data.subject}</h1>
        <p>${data.content}</p>
      </body>
    </html>
  `;
}

export default generateHTMLContent;
