import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrders1735976551785 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('orders');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'orders',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'table_id',
              type: 'int',
            },
            {
              name: 'status',
              type: 'enum',
              enum: ['preparing', 'completed', 'delivered'],

              default: 'preparing',
            },
            {
              name: 'total_amount',
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
              name: 'payment_status',
              type: 'enum',
              enum: ['pending', 'paid'],
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
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
