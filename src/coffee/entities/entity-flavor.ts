import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './entity-coffee';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', length: 1000, default: '' })
  name: string;
  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
