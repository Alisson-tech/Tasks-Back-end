import AppDataSource from "../dataSource";
import { Task, TaskPayload } from "../models/dtos/task.dto";
import { InvalidData } from "../errors/InvalidData";
import { NotFoundData } from "../errors/NotFoundData";
import { TaskEntity } from "../models/entities/TasksEntity";

const taskRepo = AppDataSource.getRepository(TaskEntity);

export const findAll = async () :  Promise<Task[]> => {
  const taskEntityList = await taskRepo.find();

  const taskDtos: Task[] = taskEntityList.map(task => ({
    id: task.id,
    title: task.title,
    description: task.description,
    completed: task.completed,
  }));

  return taskDtos;
};

export const findById = async (id: number) : Promise<Task>  => {
  const taskEntity = await taskRepo.findOneBy({ id });

  if (!taskEntity)
    throw new NotFoundData("Tarefa não encontrada");

  return {
    id: taskEntity.id,
    title: taskEntity.title,
    description: taskEntity.description,
    completed: taskEntity.completed
  } as Task;
};

export const create = async (payload: TaskPayload) : Promise<Task>  => {

  if (payload.title == null || payload.description == null)
    throw new InvalidData("Título e descrição são obrigatórios");

  const taskEntity : TaskEntity = new TaskEntity(payload.title, payload.description)
  await taskRepo.save(taskEntity);

  return {
    id: taskEntity.id,
    title: taskEntity.title,
    description: taskEntity.description,
    completed: taskEntity.completed
  } as Task;

};

export const update = async (id: number, payload: Partial<TaskPayload>): Promise<Task>  => {
  const task = await taskRepo.findOneBy({ id });

  if (!task) 
    throw new NotFoundData("Tarefa não encontrada");

  task.title = payload.title ?? task.title;
  task.description = payload.description ?? task.description;

  const taskEntity = await taskRepo.save(task);

  return {
    id: taskEntity.id,
    title: taskEntity.title,
    description: taskEntity.description,
    completed: taskEntity.completed
  } as Task;
};

export const remove = async (id: number)  => {
  const task = await taskRepo.findOneBy({ id });

  if (!task)
    throw new NotFoundData("Tarefa não encontrada");

  await taskRepo.remove(task);
};


