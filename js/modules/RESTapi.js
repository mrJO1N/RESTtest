class ClientApi {
    constructor() { }
    getJson(request, responce) {
        let data = "";
        request.on("data", (chunk) => (data += chunk));
        return new Promise((reject) => {
            request.on("end", () => {
                console.log("data: end");
                reject(data);
            });
        });
    }
    sendJson(request, responce, objToSend) {
        responce
            .writeHead(200, { "Content-Type": "application/json" })
            .end(JSON.stringify(objToSend));
    }
}
export const api = new ClientApi();
