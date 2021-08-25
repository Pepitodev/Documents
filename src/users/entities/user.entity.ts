import { Product } from 'src/products/entities/product.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 500 })
    name: string;
  
    @Column()
    surname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(type=>Product, product => product.user)
    products: Product[]    
}
