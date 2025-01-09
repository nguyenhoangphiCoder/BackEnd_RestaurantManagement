import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Table } from './tables.entity';
import { MenuItem } from './menuItems.entity';
@Entity('reservations')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.reservations)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @ManyToOne(() => Table, (table) => table.reservations)
  @JoinColumn({ name: 'table_id' })
  table: Table;
  @ManyToOne(() => MenuItem, (menu_item) => menu_item.reservations)
  @JoinColumn({ name: 'menu_item_id' })
  menu_item: MenuItem;
  @Column({ type: 'int' })
  number_of_people: number;
  @Column({ type: 'datetime' })
  reservation_time: Date;
  @Column({ type: 'text', nullable: true })
  special_request: string;
  @Column({
    type: 'enum',
    enum: ['confirmed', 'pending', 'cancelled'],
    default: 'pending',
  })
  status: string;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
