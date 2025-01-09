import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1735897920415 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('categories');
    if (!tableExists) {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true, // Chỉ định là khóa chính
              isGenerated: true, // Tự động tăng
              generationStrategy: 'increment', // Chiến lược tự động tăng
            },
            {
              name: 'name',
              type: 'varchar',
              length: '255', // Độ dài của trường name là 255
            },
            {
              name: 'email',
              type: 'varchar',
              length: '255', // Độ dài của trường email là 255
              isUnique: true, // Đảm bảo email là duy nhất
            },
            {
              name: 'phone_number',
              type: 'varchar',
              length: '15', // Độ dài của số điện thoại là 15
              isUnique: true, // Đảm bảo số điện thoại là duy nhất
            },
            {
              name: 'password',
              type: 'varchar',
              length: '255', // Độ dài của password là 255
            },
            {
              name: 'avatar',
              type: 'varchar',
              length: '512', // Thay đổi thành avatar với độ dài 512
              isNullable: true, // Có thể là null
            },
            {
              name: 'role',
              type: 'enum',
              enum: ['admin', 'staff', 'customer'], // Các giá trị role
              default: "'customer'", // Mặc định là customer
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP', // Thời gian tạo mặc định là hiện tại
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'CURRENT_TIMESTAMP',
              onUpdate: 'CURRENT_TIMESTAMP', // Cập nhật tự động khi có thay đổi
            },
          ],
        }),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
