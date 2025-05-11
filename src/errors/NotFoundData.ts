export class NotFoundData extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "NotFoundData";
    this.status = 404;
  }
}