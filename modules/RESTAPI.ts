export class API {
  constructor() {}

  public sendJson(objToResponce: object) {
    return JSON.stringify(objToResponce);
  }
}

export const api = new API();
