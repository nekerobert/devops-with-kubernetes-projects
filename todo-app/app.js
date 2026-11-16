
const http = require("http");

const PORT = Number(process.env.PORT) || 3000;
const MESSAGE = process.env.MESSAGE || "Welcome to the Todo App!";

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
        });

        res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Todo App</title>
        </head>
        <body>
          <h1>Todo App</h1>
          <p>${MESSAGE}</p>
        </body>
      </html>
    `);
        return;
    }

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found\n");
});

server.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
