import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export function errorHandler(err: any, _: Request, res: Response, __: NextFunction): Response {
  if (err instanceof AppError) {
    return res.status(err.status).json({
      error: true,
      message: err.message,
    });
  }

  return res.status(500).json({
    error: true,
    message: "Erro interno do servidor",
  });
}
