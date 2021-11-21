import * as Yup from 'yup';

// eslint-disable-next-line import/prefer-default-export
export const cadastroSchema = Yup.object().shape({
  name: Yup.string().required(),
  company_name: Yup.string().required(),
  email: Yup.string().required(),
  phone_number: Yup.string().required(),
  company_size_id: Yup.string().required(),
  active: Yup.boolean(),
});
