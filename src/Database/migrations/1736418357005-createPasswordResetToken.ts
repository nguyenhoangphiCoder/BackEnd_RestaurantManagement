import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePasswordResetToken1736418357005
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('password_reset_tokens');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'password_reset_tokens',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'user_id',
              type: 'int',
            },
            {
              name: 'token',
              type: 'varchar',
              length: '255',
            },
            {
              name: 'expires_at',
              type: 'timestamp',
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
            },
          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('password_reset_tokens');
  }
}
