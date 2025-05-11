import { AppError } from "./AppError";

export class InvalidData extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}