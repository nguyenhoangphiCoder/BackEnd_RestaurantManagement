// CREATE TABLE cart_items (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     cart_id INT,
//     product_id INT,
//     quantity INT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//     FOREIGN KEY (cart_id) REFERENCES carts(id),
//     FOREIGN KEY (product_id) REFERENCES products(id)
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
import { Cart } from './carts.entity';
import { Product } from './products.entity';

@Entity('cart_items')
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Cart, (cart) => cart.cart_items)
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;
  @ManyToOne(() => Product, (product) => product.cart_items)
  @JoinColumn({ name: 'product_id' })
  product: Product;
  @Column({ type: 'int' })
  quantity: number;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
