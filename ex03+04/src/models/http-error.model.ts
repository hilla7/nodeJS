import { HttpStatusCode } from "./http-status-code.model";

export class HttpError extends Error {
    status: HttpStatusCode;
    constructor(status: HttpStatusCode, message?: string) {
        super(message);
        this.status = status;
    }
}
