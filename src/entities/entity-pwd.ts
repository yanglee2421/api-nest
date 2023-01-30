import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Table_Pwd')
export class Pwd {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', length: 100, default: '' })
  site: string;
  @Column({ type: 'text', length: 100, default: '' })
  user: string;
  @Column({ type: 'text', length: 100, default: '' })
  pwd: string;
}
