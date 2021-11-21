import { createConnection } from 'typeorm';

export default async function create(
  companySize1Id: string,
  companySize2Id: string,
  companySize3Id: string,
  companySize4Id: string,
): Promise<void> {
  const connection = await createConnection();

  await connection.query(`
    INSERT INTO COMPANY_SIZE(id, description)
    values ('${companySize1Id}', 'Micro Empresa (faturamento anual até R$350.000)');
  `);

  await connection.query(`
    INSERT INTO COMPANY_SIZE(id, description)
    values ('${companySize2Id}', 'Pequena Empresa (faturamento anual de R$350.000 a R$5 Milhões)');
  `);

  await connection.query(`
    INSERT INTO COMPANY_SIZE(id, description)
    values ('${companySize3Id}', 'Média Empresa (faturamento anual de R$5 Milhões a R$20 Milhões)');
  `);

  await connection.query(`
    INSERT INTO COMPANY_SIZE(id, description)
    values ('${companySize4Id}', 'Grande Empresa (faturamento anual acima de R$20 Milhões)');
  `);

  await connection.close();

  console.log('Company Size created!');
}
