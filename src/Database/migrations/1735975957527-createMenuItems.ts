import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMenuItems1735975957527 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('menu_items');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'menu_items',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'name',
              type: 'varchar',
              length: '255',
            },
            {
              name: 'price',
              type: 'decimal',
              precision: 10,
            },
            {
              name: 'description',
              type: 'text',
              isNullable: true,
            },
            {
              name: 'category_id',
              type: 'int',
            },
            {
              name: 'is_active',
              type: 'boolean',
              default: true,
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
    await queryRunner.dropTable('menu_items');
  }
}
