import randomstring = require('randomstring');
import { Column, CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export abstract class BaseEntity {
    constructor(id?: string) {
        this.id = id ?? randomstring.generate({ length: 25, charset: 'ABCDEFGHIJKLMOPQRSTUVQXYZ1234567890' });
    }

    @Column('text', { primary: true })
    id: string;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;

    @DeleteDateColumn({ type: 'timestamptz' }) // FOR SOFT DELETION
    deleted_at: Date;
}