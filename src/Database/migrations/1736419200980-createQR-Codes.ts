import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateQRCodes1736419200980 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('qr_codes');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'qr_codes',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'table-id',
              type: 'int',
            },
            {
              name: 'qr_code_data',
              type: 'varchar',
              length: '255',
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
            },
          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('qr_codes');
  }
}
