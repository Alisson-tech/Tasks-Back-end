import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, _: Request, res: Response, __: NextFunction) : Response {
  const status = err.status || 500;

  return res.status(status).json({
    error: true,
    message: err.message || "Erro interno do servidor",
  });
}