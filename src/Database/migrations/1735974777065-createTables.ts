import { Column, MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTables1735974777065 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('tables');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'tables',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'status',
              type: 'enum',
              enum: ['available', 'occupied', 'reserved'],
              default: 'available',
            },
            {
              name: 'qr_code',
              type: 'varchar',
              length: '255',
              isUnique: true,
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
    await queryRunner.dropTable('tables');
  }
}
