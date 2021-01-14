import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BeforeInsert,
    OneToMany,
    ManyToMany,
    JoinTable,
    BeforeUpdate,
    ManyToOne,
} from 'typeorm';
import { Score } from '../interfaces/review.interface';
import { ActivityEntity } from './activity.entity';
import { UserEntity } from './user.entity';

@Entity()
export class ReviewEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({default: ''})
  body: string;

  @Column({type: 'enum', enum: Score, default: Score.THREE})
  score: Score;

  @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;    

  @BeforeUpdate()
  updateTimestamp() {
      this.updatedAt = new Date;
  }

  @Column({default: 0})
  likes: number;

  @Column({nullable: true})
  publishedDate: Date;

  @Column({nullable: true})
  isPublished: boolean;

  @ManyToOne(type => UserEntity, user => user.activityEntries)
  author: UserEntity;

  @ManyToOne(type => UserEntity, user => user.activityEntries)
  activity: ActivityEntity;
}