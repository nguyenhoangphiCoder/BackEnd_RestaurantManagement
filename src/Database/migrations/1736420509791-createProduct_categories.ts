import { constrainedMemory } from 'process';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductCategories1736420509791
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('product_categories');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'product_categories',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'product_id',
              type: 'int',
            },
            {
              name: 'category_id',
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
            },
          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product_categories');
  }
}
