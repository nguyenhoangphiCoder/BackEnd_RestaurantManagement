import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateStaffSchedules1736004063802 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('staff_schedules');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'staff_schedules',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'staff_id',
              type: 'int',
            },
            {
              name: 'shift_start',
              type: 'timestamp',
            },
            {
              name: 'shift_end',
              type: 'timestamp',
            },
            {
              name: 'status',
              type: 'enum',
              enum: ['worked', 'missed'],
              default: 'missed',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
              onUpdate: 'CURRENT_TIMESTAMP',
            },
          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('staff_schedules');
  }
}
