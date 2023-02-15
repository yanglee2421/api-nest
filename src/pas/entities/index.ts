import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Table_Pas')
export class Pas {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', default: '', length: 1000 })
  site: string;
  @Column({ type: 'text', default: '', length: 1000 })
  user: string;
  @Column({ type: 'text', default: '', length: 1000 })
  pas: string;
}
