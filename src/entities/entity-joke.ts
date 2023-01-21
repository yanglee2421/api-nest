import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Table_Joke')
export class Joke {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', length: 1000 })
  context: string;
}
