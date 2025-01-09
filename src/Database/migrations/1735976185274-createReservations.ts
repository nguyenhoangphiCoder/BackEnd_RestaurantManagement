import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateReservations1735976185274 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('reservations');
    if (!tableExists) {
      new Table({
        name: 'reservations',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user_id',
            type: 'int',
          },
          {
            name: 'table_id',
            type: 'int',
          },
          { name: 'number_of_people', type: 'int' },
          {
            name: 'reservation_time',
            type: 'timestamp',
          },
          { name: 'special_request', type: 'text', isNullable: true },
          {
            name: 'status',
            type: 'enum',
            enum: ['pending', 'confirmed', 'cancelled'],
            default: 'pending',
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
      });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reservations');
  }
}
