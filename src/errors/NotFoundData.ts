import { AppError } from './AppError'

export class NotFoundData extends AppError {
  constructor(message: string) {
    super(message, 404);
  }
}