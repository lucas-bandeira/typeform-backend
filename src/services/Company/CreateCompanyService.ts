import { getCustomRepository } from 'typeorm';
import Company from '../../models/Company';
import CompaniesRepository from '../../repositories/CompaniesRepository';

interface IRequestDTO {
  name: string;
  company_name: string;
  email: string;
  phone_number: string;
  company_size_id: string;
  active: boolean;
}

class CreateCompanyService {
  public async execute(company: IRequestDTO): Promise<Company | undefined> {
    const companiesRepository = getCustomRepository(CompaniesRepository);

    try {
      const newCompany = companiesRepository.create(company);
      await companiesRepository.save(newCompany);
      return newCompany;
    } catch (e) {
      return undefined;
    }
  }
}

export default CreateCompanyService;
