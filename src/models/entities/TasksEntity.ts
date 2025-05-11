import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column('text', { nullable: true })
  description!: string;

  @Column({ default: false })
  completed!: boolean;

  constructor(title?: string, description?: string) {
    if (title) this.title = title;
    if (description) this.description = description;
    this.completed = false;
  }
}