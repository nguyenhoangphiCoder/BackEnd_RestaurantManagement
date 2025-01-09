// CREATE TABLE orders (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     user_id INT NOT NULL,
//     total_amount DECIMAL(10, 2) NOT NULL,
//     status ENUM('preparing', 'completed', 'delivered') NOT NULL,
//     payment_status ENUM('paid', 'unpaid') NOT NULL,
//     payment_method ENUM('e-wallet', 'bank_card', 'cash') NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
// );
// ALTER TABLE orders
// ADD COLUMN table_id INT NOT NULL;
// ALTER TABLE orders
// ADD CONSTRAINT fk_orders_table_id
// FOREIGN KEY (table_id) REFERENCES tables(id) ON DELETE CASCADE;

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Table } from './tables.entity';
import e from 'express';
import { OrderItem } from './orderItems.entity';
import { Review } from './reviews.entity';
import { Payment } from './payments.entity';
import { Transaction } from './transactions.entity';
@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @ManyToOne(() => Table, (table) => table.orders)
  @JoinColumn({ name: 'table_id' })
  table: Table;
  @Column({ type: 'decimal' })
  total_amount: number;
  @Column({
    type: 'enum',
    enum: ['preparing', 'completed', 'delivered'],
    default: 'preparing',
  })
  status: string;
  @Column({
    type: 'enum',
    enum: ['paid', 'unpaid'],
    default: 'unpaid',
  })
  payment_status: string;
  @Column({
    type: 'enum',
    enum: ['e-wallet', 'bank_card', 'cash'],
    default: 'e-wallet',
  })
  payment_method: string;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  @ManyToOne(() => OrderItem, (order_item) => order_item.order)
  order_items: OrderItem[];
  @ManyToOne(() => Review, (review) => review.order)
  reviews: Review[];
  @ManyToOne(() => Payment, (payment) => payment.order)
  payments: Payment[];
  @ManyToOne(() => Transaction, (transaction) => transaction.order)
  transactions: Transaction[];
}
