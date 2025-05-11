import { Request, Response, NextFunction } from "express";
import * as taskService from "../services/task.service";

export const getAll = async (_: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    const tasks = await taskService.findAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getById = async (req: Request, res: Response, next: NextFunction) : Promise<void>  => {
  try {
    const id = Number(req.params.id);
    const task = await taskService.findById(id);
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) : Promise<void>  => {
  try {
    const task = await taskService.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) : Promise<void>  => {
  try {
    const id = Number(req.params.id);
    const updated = await taskService.update(id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) : Promise<void>  => {
  try {
    const id = Number(req.params.id);
    await taskService.remove(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
