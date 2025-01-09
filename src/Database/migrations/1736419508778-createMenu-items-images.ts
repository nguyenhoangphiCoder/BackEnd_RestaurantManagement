import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMenuItemsImages1736419508778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('menu_items_images');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'menu_items_images',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'menu_item_id',
              type: 'int',
            },
            {
              name: 'image_url',
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
    await queryRunner.dropTable('menu_items_images');
  }
}
