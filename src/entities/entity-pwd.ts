import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Table_Pwd')
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
