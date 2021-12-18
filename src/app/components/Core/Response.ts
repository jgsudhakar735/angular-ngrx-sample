export class Response {
  constructor(
    public body: any,
    public headers: any,
    public status: number,
    public statusText: string
  ) {}
}
