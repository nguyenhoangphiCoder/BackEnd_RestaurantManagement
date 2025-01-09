import e from 'express';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { CartItem } from './cartItems.entity';
import { ProductCategory } from './productCategories.entity';
@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255 })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'decimal' })
  price: number;
  @Column({ type: 'int' })
  quantity: number;
  @Column()
  quantity_sold: number;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  @ManyToOne(() => CartItem, (cart_item) => cart_item.product)
  cart_items: CartItem[];
  @ManyToOne(
    () => ProductCategory,
    (product_category) => product_category.product,
  )
  product_categories: ProductCategory[];
}
