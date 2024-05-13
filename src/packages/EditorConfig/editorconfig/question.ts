import { createYesNo } from '../../../utilities/inquirer';

export const QUESTION = (key: string) => {
  return createYesNo(key, 'Do you want to create .editorconfig?');
};
