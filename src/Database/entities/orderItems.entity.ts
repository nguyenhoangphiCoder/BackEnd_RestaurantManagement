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
import { MenuItem } from './menuItems.entity';
import e from 'express';

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Order, (order) => order.order_items)
  @JoinColumn({ name: 'order_id' })
  order: Order;
  @ManyToOne(() => MenuItem, (menu_item) => menu_item.order_items)
  @JoinColumn({ name: 'menu_item_id' })
  menu_item: MenuItem;
  @Column({ type: 'int' })
  quantity: number;
  @Column({ type: 'text' })
  notes: string;
  @Column({ type: 'decimal' })
  price: number;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
