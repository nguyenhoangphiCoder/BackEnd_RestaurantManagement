import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategoriesImages1736420154905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('categories_images');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'categories_images',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'category_id',
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
    await queryRunner.dropTable('categories_images');
  }
}
