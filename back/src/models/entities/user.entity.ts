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
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Iuser, UserRole } from '../interfaces/user.interface';
import { ActivityEntity } from './activity.entity';
import { ReviewEntity } from './review.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  //unique as username is used as screenname
  @Column({unique: true})
  username: string;

  //unique as only 1 account per email is allowed
  @Column({unique: true})
  email: string;

  @Column({select: false})
  password: string;

  @Column({type: 'enum', enum: UserRole, default: UserRole.USER})
  role: UserRole;

  @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date;
  }

  @Column({nullable: true})
  profileImage: string;

  @OneToMany(type => ActivityEntity, activityEntity => activityEntity.author)
  activityEntries: ActivityEntity[];

  @OneToMany(type => ReviewEntity, reviewEntity => reviewEntity.author)
  reviewEntries: ReviewEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  // toObject(showToken: boolean = true): User {
  //   const { id, firstName, lastName, email } = this;
  //   const userObject: User = {
  //     id,
  //     firstName,
  //     lastName,
  //     email,
  //   };
  //   return userObject;
  // }

  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }
}