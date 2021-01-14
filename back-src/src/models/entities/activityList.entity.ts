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
import { ReviewEntity } from './review.entity';
import { UniversityEntity } from './university.entity';
import { UserEntity } from './user.entity';

@Entity()
export class ActivityListEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({default: ''})
  description: string;

  @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;  

  @BeforeUpdate()
  updateTimestamp() {
      this.updatedAt = new Date;
  }

  @Column({nullable: true})
  isVisible: boolean;

  @OneToMany(type => UserEntity, user => user.activityEntries)
  activities: ActivityEntity[]

  @ManyToOne(type => ReviewEntity, review => review)
  university: UniversityEntity
}