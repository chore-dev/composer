import { createYesNo } from '../../utilities/inquirer';

export const QUESTION = (key: string) => {
  return createYesNo(key, 'Do you use JS/TS syntax extension(JSX/TSX)?');
};
