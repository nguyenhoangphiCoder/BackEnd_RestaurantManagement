import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Category } from './categories.entity';
import { Reservation } from './reservations.entity';
import { OrderItem } from './orderItems.entity';
import { MenuItemImage } from './menuItemsImages.entity';
@Entity('menu_items')
export class MenuItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ type: 'int' })
  quantity: number;

  @Column()
  quantity_sold: number;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  @OneToMany(() => Category, (category) => category.menu_items)
  categories: Category[];
  @OneToMany(() => Reservation, (reservation) => reservation.menu_item)
  reservations: Reservation[];
  @OneToMany(() => OrderItem, (order_item) => order_item.menu_item)
  order_items: OrderItem[];
  @OneToMany(
    () => MenuItemImage,
    (menu_item_image) => menu_item_image.menu_item,
  )
  menu_item_images: MenuItemImage[];
}
