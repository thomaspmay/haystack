import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BeforeInsert,
    OneToMany,
    ManyToMany,
    JoinTable,
} from 'typeorm';

@Entity()
export class FoodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unstructuredFood: string;

  @Column()
  foodName: string;

  @Column()
  quantity: string;

  @Column()
  unit: string;

  @Column()
  standardisedQuantity: string;

  @Column()
  standardisedUnit: string;
  
  @Column()
  unitType: string;

  @Column()
  createdDate: string;

  @Column()
  expiryDate: string;

  @Column()
  barcode: string;
}