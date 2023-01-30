import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Table_Joke')
export class Joke {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', default: '', length: 1000 })
  joke: string;
}

@Entity('Event_Joke')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'int', default: 0 })
  count: number;
}
