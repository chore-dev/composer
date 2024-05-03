import {QuestionType, SimplifiedChoices} from "../../../types";

export const basic = (type: QuestionType, key: string, question: string) => ({
  message: question,
  name: key,
  type
});

export const massageChoices = <Choices extends SimplifiedChoices>(choices: Choices) => {
  return choices.map(([label, value, short = label, checked = false, disabled = false]) => ({
    checked,
    disabled,
    label,
    short,
    value,
  }))
}
