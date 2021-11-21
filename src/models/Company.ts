import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import CompanySize from './CompanySize';

@Entity('companies')
class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  company_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  company_size_id: string;

  @ManyToOne(() => CompanySize, () => {}, { eager: true })
  company_size: CompanySize;

  @Column('boolean')
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Company;
