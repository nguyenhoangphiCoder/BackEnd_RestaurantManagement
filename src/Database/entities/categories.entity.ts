import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { MenuItem } from './menuItems.entity';
import { CategoryImage } from './categoryImages.entity';
import { ProductCategory } from './productCategories.entity';
@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column()
  is_active: boolean;

  @Column()
  description: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
  @ManyToOne(() => MenuItem, (menu_items) => menu_items.categories)
  menu_items: MenuItem[];
  @ManyToOne(() => CategoryImage, (category_images) => category_images.category)
  category_images: CategoryImage[];
  @ManyToOne(
    () => ProductCategory,
    (product_categories) => product_categories.category,
  )
  product_categories: ProductCategory[];
}
