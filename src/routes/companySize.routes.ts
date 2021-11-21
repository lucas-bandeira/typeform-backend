import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CompanySizeRepository from '../repositories/CompanySizeRepository';

const companySizeRouter = Router();

companySizeRouter.get('/', async (request, response) => {
  const companySizeRepository = getCustomRepository(CompanySizeRepository);

  const companySize = await companySizeRepository.find({
    where: {
      active: true,
    },
  });

  return response.json(companySize);
});

export default companySizeRouter;
