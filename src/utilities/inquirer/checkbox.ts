import {CheckboxChoiceOptions, CheckboxQuestionOptions} from "inquirer";

import {ReturnChoicesType} from "../../../types";

import {basic, massageChoices} from "./shared";

export const createCheckbox = (key: string, question: string, choices: ReturnChoicesType<typeof createCheckboxChoice>): CheckboxQuestionOptions => ({
  ...basic('checkbox', key, question),
  choices,
  filter: (answers) => {
    return Object.fromEntries(choices.map(({value}) => [value, answers.includes(value)]))
  },
  loop: true
});

export const createCheckboxChoice = ({
                                       label,
                                       value,
                                       ...rest
                                     }: ReturnType<typeof massageChoices>[number]): CheckboxChoiceOptions => ({
  name: label,
  value,
  ...rest
});
