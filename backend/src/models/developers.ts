import { Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
 } from 'typeorm';
import { Levels } from './levels';
  
  @Entity('developers')
  export class Developers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    sexo: string;

    @Column()
    data_nascimento: Date;

    @Column()
    idade: number;

    @Column()
    hobby: string;

    @ManyToOne(() => Levels, level => level.developers)
    @JoinColumn({ name: 'level' })
    level: Levels;   
  }