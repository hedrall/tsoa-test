declare module 'express' {
  interface Request {
    user: { id: string };
  }
}
