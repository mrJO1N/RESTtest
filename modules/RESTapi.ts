import { IncomingMessage, ServerResponse } from "http";

class ClientApi {
  constructor() {}

  getJson(request: IncomingMessage, responce: ServerResponse<IncomingMessage>) {
    let data = "";

    request.on("data", (chunk: string) => (data += chunk));
    return new Promise((reject) => {
      request.on("end", () => {
        console.log("data: end");
        reject(data);
      });
    });
  }

  public sendJson(
    request: IncomingMessage,
    responce: ServerResponse<IncomingMessage>,
    objToSend: object
  ) {
    responce
      .writeHead(200, { "Content-Type": "application/json" })
      .end(JSON.stringify(objToSend));
  }
}

export const api = new ClientApi();
