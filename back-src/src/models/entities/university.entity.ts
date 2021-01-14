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
import { ActivityEntity } from './activity.entity';
import { ActivityListEntity } from './activityList.entity';
import { ReviewEntity } from './review.entity';
import { UserEntity } from './user.entity';

@Entity()
export class UniversityEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column({default: ''})
  description: string;

  @Column({default: ''})
  body: string;

  @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;    

  @BeforeUpdate()
  updateTimestamp() {
      this.updatedAt = new Date;
  }

  @Column({nullable: true})
  headerImage: string;

  @Column({nullable: true})
  isPublished: boolean;


  @ManyToOne(type => ActivityEntity, activity => activity.university)
  activities: ActivityEntity

  @ManyToOne()
  activityLists: ActivityListEntity[]

}