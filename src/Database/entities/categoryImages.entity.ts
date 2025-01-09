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

@Entity('category_images')
export class CategoryImage {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Category, (category) => category.category_images)
  @JoinColumn({ name: 'category_id' })
  category: Category;
  @Column({ type: 'varchar', length: 255 })
  image_url: string;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
