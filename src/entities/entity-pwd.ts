import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Pwd {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', length: 100 })
  site: string;
  @Column({ type: 'text', length: 100 })
  user: string;
  @Column({ type: 'text', length: 100 })
  pwd: string;
}
