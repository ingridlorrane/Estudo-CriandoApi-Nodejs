const app = require("../src/app");
const debug = require("debug")("balta:server");
const http = require("http");

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
// Iniciando o servidor e escutando a porta especificada
server.listen(port);
// Tratando erros de servidor
server.on("error", onError);
server.on("listening", onListening);
// Exibindo a mensagem de que a API está rodando na porta especificada
console.log("API rodando na porta " + port);
// Função para normalizar a porta
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
// Função para tratar erros de servidor
function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
// Função executada quando o servidor começa a escutar a porta
function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
