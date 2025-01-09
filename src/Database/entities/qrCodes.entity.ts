import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Table } from './tables.entity';

@Entity('qr_codes')
export class QrCode {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Table, (table) => table.qrCodes)
  @JoinColumn({ name: 'table_id' })
  table: Table;
  @Column({ length: 255 })
  qr_code_data: string;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
