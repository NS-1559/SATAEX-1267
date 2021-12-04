import camelcaseKeys from 'camelcase-keys';

export const formatCamelcase = (input: any) => {
  return camelcaseKeys(input, {
    deep: true,
  });
};
