import { CustomError } from "./custom/custom.error";

export class ApiForbidden extends CustomError {
  statusCode = 403;

  constructor(stack?: string) {
    super("Forbidden");
    Object.setPrototypeOf(this, ApiForbidden.prototype);
  }

  serializeError() {
    return [{ message: "Forbidden", stack: this.stack }];
  }
}
