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
import { UserEntity } from './user.entity';

@Entity()
export class ActivityEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column({default: ''})
  description: string;

  @Column()
  tags: string[];

  @Column()
  location: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  zoom: number;

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

  @Column({default: 0})
  avgRating: number;

  @Column({nullable: true})
  headerImage: string;

  @Column({nullable: true})
  dateAccepted: Date;

  @Column({nullable: true})
  isAccepted: boolean;

  @ManyToOne(type => UserEntity, user => user.activityEntries)
  author: UserEntity;

  @OneToMany(type => ReviewEntity, review => review.)
  reviews: ReviewEntity;

  @Column()
  university: any;

}