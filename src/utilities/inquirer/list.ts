import { ListChoiceOptions, ListQuestionOptions } from 'inquirer';

import { ReturnChoicesType } from '../../../types';

import { basic, massageChoices } from './shared';

export const createList = (
  key: string,
  question: string,
  choices: ReturnChoicesType<typeof createListChoice>
): ListQuestionOptions => {
  const defaultIndex = choices.findIndex(({ checked }) => checked) || 0;

  return {
    ...basic('list', key, question),
    choices,
    default: defaultIndex,
    loop: true
  };
};

export const createListChoice = ({
  label,
  value,
  ...rest
}: ReturnType<typeof massageChoices>[number]): ListChoiceOptions & {
  checked: boolean;
} => ({
  name: label,
  value,
  ...rest
});
