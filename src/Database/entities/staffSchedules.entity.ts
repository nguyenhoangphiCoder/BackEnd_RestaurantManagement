// CREATE TABLE staff_schedules (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     staff_id INT NOT NULL,
//     shift_start DATETIME NOT NULL,
//     shift_end DATETIME NOT NULL,
//     status ENUM('worked', 'missed') NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//     FOREIGN KEY (staff_id) REFERENCES users(id) ON DELETE CASCADE
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
import { User } from './users.entity';
import e from 'express';
@Entity('staff_schedules')
export class StaffSchedule {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.staff_schedules)
  @JoinColumn({ name: 'staff_id' })
  user: User;
  @Column({ type: 'datetime' })
  shift_start: Date;
  @Column({ type: 'datetime' })
  shift_end: Date;
  @Column({
    type: 'enum',
    enum: ['worked', 'missed'],
    default: 'worked',
  })
  status: string;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @UpdateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
