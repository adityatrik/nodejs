const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const queryParams = url.searchParams;

    // Ambil nilai parameter
    const name = queryParams.get('name');
    const age = queryParams.get('age');

    // Berikan respon
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <html>
          <head>
            <title>Response</title>
          </head>
          <body>
            <h1>Hello, ${name}!</h1>
            <p>Your age is ${age}.</p>
          </body>
        </html>
      `);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const port = 3002;
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});;
