import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePayments1736003796156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('payments');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'payments',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'order_id',
              type: 'int',
            },
            {
              name: 'amount',
              type: 'decimal',
              precision: 10,
              scale: 2,
              default: 0,
            },
            {
              name: 'payment_method',
              type: 'enum',
              enum: ['cash', 'e-wallet', 'bank_card'],
              default: 'cash',
            },
            {
              name: 'status',
              type: 'enum',
              enum: ['pending', 'paid'],
              default: 'pending',
            },
            { name: 'transaction_id', type: 'varchar' },
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
    await queryRunner.dropTable('payments');
    ``;
  }
}
