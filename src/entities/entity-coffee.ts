import { FileValidator } from '@nestjs/common';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './entity-flavor';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', length: 1000, default: '名称' })
  name: string;
  @Column({ type: 'text', length: 1000, default: '品牌' })
  brand: string;
  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, { cascade: true })
  flavors: Flavor[];
}
