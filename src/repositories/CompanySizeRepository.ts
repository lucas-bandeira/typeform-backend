import { EntityRepository, Repository } from 'typeorm';

import CompanySize from '../models/CompanySize';

@EntityRepository(CompanySize)
class CompanySizeRepository extends Repository<CompanySize> {}

export default CompanySizeRepository;
