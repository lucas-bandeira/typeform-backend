import { Router } from 'express';
import CompaniesRouter from './companies.routes';
import CompanySizeRouter from './companySize.routes';

const routes = Router();

routes.use('/companies', CompaniesRouter);

routes.use('/companySize', CompanySizeRouter);

export default routes;
