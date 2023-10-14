/* axuality.ts */
import { IncomingMessage, ServerResponse } from "http";

export type extToCT_T = {
  [key: string]: string;
};

export type defaultPathDir_T = {
  pagePath: string;
  filePath: string;
};

export interface spAliaces_I {
  [key: string]: string;
}

export class ClientApi {
  public getJson(
    request: IncomingMessage,
    responce: ServerResponse<IncomingMessage>
  );
  public sendJson(
    request: IncomingMessage,
    responce: ServerResponse<IncomingMessage>,
    objToSend: object
  ) {}
}
/* =============================== */
/*  */
