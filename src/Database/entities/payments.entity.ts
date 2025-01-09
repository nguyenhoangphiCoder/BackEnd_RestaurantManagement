import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Order } from './orders.entity';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Order, (order) => order.payments)
  @JoinColumn({ name: 'order_id' })
  order: Order;
  @Column({
    type: 'enum',
    enum: ['e-wallet', 'bank_card', 'cash'],
  })
  payment_method: string;
  @Column({ type: 'decimal' })
  amount: number;
  @Column({
    type: 'enum',
    enum: ['success', 'failed'],
    default: 'failed',
  })
  status: string;
  @Column({ length: 255 })
  transaction_id: string;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
