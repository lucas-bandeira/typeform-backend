import { v4 as uuidV4 } from 'uuid';

import createCompanySize from './CompanySize';

const companySize1Id = uuidV4();
const companySize2Id = uuidV4();
const companySize3Id = uuidV4();
const companySize4Id = uuidV4();

async function execute() {
  try {
    await createCompanySize(
      companySize1Id,
      companySize2Id,
      companySize3Id,
      companySize4Id,
    );
  } catch (e) {
    console.log(e);
    throw new Error();
  }
}

execute()
  .then(() => console.log('Seed complete!'))
  .catch(() => console.log('Seed error!'));
