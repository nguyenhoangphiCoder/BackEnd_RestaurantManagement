import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './users.entity';

@Entity('password_reset_tokens')
export class PasswordResetToken {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.password_reset_tokens)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @Column({ length: 255 })
  token: string;
  @Column({ type: 'timestamp' })
  expired_at: Date;
  @CreateDateColumn({ default: 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
