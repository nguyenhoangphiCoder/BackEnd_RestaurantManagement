import e from 'express';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Reservation } from './reservations.entity';
import { Order } from './orders.entity';
import { QrCode } from './qrCodes.entity';
@Entity('tables')
export class Table {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'enum',
    enum: [`available`, `occupied`, `reserved`],
    default: 'available',
  })
  status: string;
  @Column({ length: 255 })
  qr_code: string;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  @OneToMany(() => Reservation, (reservation) => reservation.table)
  reservations: Reservation[];
  @OneToMany(() => Order, (order) => order.table)
  orders: Order[];
  @OneToMany(() => QrCode, (qr_code) => qr_code.table)
  qrCodes: QrCode[];
}
