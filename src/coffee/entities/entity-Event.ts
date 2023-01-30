import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', length: 1000, default: '' })
  name: string;
  @Column({ type: 'text', length: 1000, default: '' })
  type: string;
  @Index()
  @Column({ type: 'text', length: 1000, default: '' })
  payload: string;
}
