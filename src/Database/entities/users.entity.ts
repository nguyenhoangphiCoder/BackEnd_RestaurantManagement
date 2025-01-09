import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Reservation } from './reservations.entity';
import { Order } from './orders.entity';
import { Cart } from './carts.entity';
import { Review } from './reviews.entity';
import { StaffSchedule } from './staffSchedules.entity';
import { PasswordResetToken } from './passwordResetTokens.entity';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 15, unique: true })
  phone_number: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 512, nullable: true })
  avatar: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'staff', 'customer'],
    default: 'customer',
  })
  role: string;

  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  @OneToMany(() => Reservation, (reservation) => reservation.user)
  reservations: Reservation[];
  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
  @OneToMany(() => Cart, (cart) => cart.user)
  carts: Cart[];
  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
  @OneToMany(() => StaffSchedule, (staff_schedule) => staff_schedule.user)
  staff_schedules: StaffSchedule[];
  @OneToMany(
    () => PasswordResetToken,
    (password_reset_token) => password_reset_token.user,
  )
  password_reset_tokens: PasswordResetToken[];
}
