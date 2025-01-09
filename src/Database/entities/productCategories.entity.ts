import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  JoinColumn,
} from 'typeorm';
import { Category } from './categories.entity';
import { Product } from './products.entity';

@Entity('product_categories')
export class ProductCategory {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Category, (category) => category.product_categories)
  @JoinColumn({ name: 'category_id' })
  category: Category;
  @ManyToOne(() => Product, (product) => product.product_categories)
  @JoinColumn({ name: 'product_id' })
  product: Product;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
