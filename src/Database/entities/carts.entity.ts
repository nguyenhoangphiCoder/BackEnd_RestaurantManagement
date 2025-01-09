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
import { CartItem } from './cartItems.entity';
@Entity('carts')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.carts)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  @ManyToOne(() => CartItem, (cart_item) => cart_item.cart)
  cart_items: CartItem[];
}
