import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exercice } from './exercices.entity';
import { Muscle } from './muscles.entity';

@Entity({ name: 'predefined_exercices' })
export class PredefinedExercice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Muscle, (muscle) => muscle.predefinedExercice)
  @JoinColumn({ name: 'muscle_id' })
  muscles?: Muscle[];

  @Column({ select: false, nullable: true, name: 'muscle_id' })
  muscleId?: number;

  @OneToMany(() => Exercice, (exercice) => exercice.predefinedExercice)
  exercices?: Exercice[];
}
