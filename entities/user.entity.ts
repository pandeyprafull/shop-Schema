/**
 * @author Prafull Pandey <prafullpandey68@gmail.com>
 * Database Table for storing user data.
 */
import { Role } from '../enums';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
export class User extends BaseEntity {
    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column('text', { unique: true, nullable: false })
    email: string;

    @Column({ default: false })
    is_email_verified: boolean;

    @Column('text', { nullable: false })
    password: string;

    @Column('text', { nullable: true })
    token: string;

    @Column('text', { unique: true, nullable: true })
    phone_number: string;

    @Column({ type: 'enum', enum: Role , default: Role.user})
    role!: Role;


}