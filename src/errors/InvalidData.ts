export class InvalidData extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "InvalidData";
    this.status = 400;
  }
}