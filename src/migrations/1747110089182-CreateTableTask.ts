import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableTask1747110089182 implements MigrationInterface {
    name = 'CreateTableTask1747110089182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text, "completed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tasks"`);
    }

}
