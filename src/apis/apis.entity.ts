import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('rate')
export class RateEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('text') name: string;

  @Column('text') email: string;

  @Column('text') rate: number;

  @Column('text') res_id: number;
}
