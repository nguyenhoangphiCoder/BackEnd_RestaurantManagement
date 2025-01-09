import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTransactions1736418671850 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('transactions');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'transactions',
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
              name: 'status',
              type: 'enum',
              enum: ['success', 'failed'],
              default: "'success'",
            },
            {
              name: 'payment_method',
              type: 'enum',
              enum: ['e-wallet', 'bank_card', 'cash'],
            },
            { name: 'transaction_detail', type: 'text' },
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
    await queryRunner.dropTable('transactions');
  }
}
