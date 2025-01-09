// CREATE TABLE transactions (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     order_id INT NOT NULL,
//     status ENUM('success', 'failed') NOT NULL,
//     payment_method ENUM('e-wallet', 'bank_card', 'cash') NOT NULL,
//     transaction_details TEXT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
// );

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Order } from './orders.entity';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Order, (order) => order.transactions)
  @JoinColumn({ name: 'order_id' })
  order: Order[];
  @Column({
    type: 'enum',
    enum: ['success', 'failed'],
    default: 'failed',
  })
  status: string;
  @Column({
    type: 'enum',
    enum: ['e-wallet', 'bank_card', 'cash'],
  })
  payment_method: string;
  @Column({ type: 'text' })
  transaction_details: string;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
