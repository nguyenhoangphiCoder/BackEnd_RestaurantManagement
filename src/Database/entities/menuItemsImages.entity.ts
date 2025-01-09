// CREATE TABLE menu_item_images (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     menu_item_id INT NOT NULL,
//     image_url VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//     FOREIGN KEY (menu_item_id) REFERENCES menu_items(id) ON DELETE CASCADE
// );

import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  JoinColumn,
} from 'typeorm';
import { MenuItem } from './menuItems.entity';

@Entity('menu_item_images')
export class MenuItemImage {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => MenuItem, (menu_item) => menu_item.menu_item_images)
  @JoinColumn({ name: 'menu_item_id' })
  menu_item: MenuItem;
  @Column({ type: 'varchar', length: 255 })
  image_url: string;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
