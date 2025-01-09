import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCartItems1735977888729 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('cart_items');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'cart_items',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'cart_id',
              type: 'int',
            },
            {
              name: 'menu_item_id',
              type: 'int',
            },
            {
              name: 'quantity',
              type: 'int',
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
    await queryRunner.dropTable('cart_items');
  }
}
