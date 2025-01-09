import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Order } from './orders.entity';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @ManyToOne(() => Order, (order) => order.reviews)
  @JoinColumn({ name: 'order_id' })
  order: Order;
  @Column({ type: 'int' })
  rating: number;
  @Column({ type: 'text' })
  comments: string;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
