import { User } from "./user.entity";
import { ExternalSystem } from "../enums";
import { Entity, Column, ManyToOne, Unique } from "typeorm";
import { BaseEntity } from './base.entity';


@Entity()
@Unique([ 'user', 'provider', 'externalId' ])
export class Account extends BaseEntity {
  @Column()
  externalId!: string;

  @Column({ nullable: true })
  refresh_token!: string;

  @Column({ nullable: true })
  access_token!: string;

  @Column()
  provider!: ExternalSystem;

  @ManyToOne(() => User, user => user.accounts, { onDelete: 'CASCADE', nullable: true })
  user!: User;
}
