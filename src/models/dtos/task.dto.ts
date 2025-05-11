export interface Task {
  id: number;
  completed: boolean;
  title: string;
  description: string;
}

export type TaskPayload = {
  id: number | null;
  title: string;
  description: string;
};
