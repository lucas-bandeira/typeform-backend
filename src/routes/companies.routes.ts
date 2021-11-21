import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { cadastroSchema } from '../schemas/companySchema';
import CreateCompanyService from '../services/Company/CreateCompanyService';
import CompaniesRepository from '../repositories/CompaniesRepository';

const companiesRouter = Router();

companiesRouter.get('/', async (request, response) => {
  const companiesRepository = getCustomRepository(CompaniesRepository);

  const companies = await companiesRepository.find({
    where: {
      active: true,
    },
  });

  return response.json(companies);
});

companiesRouter.post('/', async (request, response) => {
  if (!(await cadastroSchema.isValid(request.body))) {
    return response.status(400).json({ error: 'Validation fails' });
  }

  const {
    name,
    company_name,
    email,
    phone_number,
    company_size_id,
    active,
  } = request.body;

  const createCompany = new CreateCompanyService();

  let newCompany;

  try {
    newCompany = await createCompany.execute({
      name,
      company_name,
      email,
      phone_number,
      company_size_id,
      active,
    });
  } catch (e) {
    console.log(e);
    throw new Error();
  }

  if (!newCompany) {
    return response
      .status(500)
      .json({ error: 'An error ocurred. Please try again!' });
  }
  return response.json(newCompany);
});

export default companiesRouter;
