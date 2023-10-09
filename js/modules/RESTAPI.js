export class API {
    constructor() { }
    sendJson(objToResponce) {
        return JSON.stringify(objToResponce);
    }
}
export const api = new API();
