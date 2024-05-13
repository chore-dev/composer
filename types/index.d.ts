import {
  CheckboxQuestion,
  ConfirmQuestion,
  EditorQuestion,
  ExpandQuestion,
  InputQuestion,
  ListQuestion,
  NumberQuestion,
  PasswordQuestion,
  RawListQuestion
} from 'inquirer';

type AnswerOfCheckbox<Key extends string> = Record<Key, boolean>;

type Question<Options> = {
  KEY: string;
  CHOICES?: SimplifiedChoices;
  OPTIONS: Options;
};

type QuestionType = (
  | CheckboxQuestion
  | ConfirmQuestion
  | EditorQuestion
  | ExpandQuestion
  | InputQuestion
  | ListQuestion
  | NumberQuestion
  | PasswordQuestion
  | RawListQuestion
)['type'];

type ReturnChoicesType<Fn extends (...args: Array<any>) => unknown> = Array<ReturnType<Fn>>;

//                      [label,  value,  short,   checked,  disabled]
type SimplifiedChoice = [string, string, string?, boolean?, boolean?];

type SimplifiedChoices = Array<SimplifiedChoice>;

type ValueOfChoices<Q extends Question<unknown>> = NonNullable<Q['CHOICES']>[number][1];

// Refactor

type CheckboxAnswers<Key extends string> = Record<Key, boolean>;

type Choice<C extends Collection<unknown>> = NonNullable<C['CHOICES']>[number][1];

type Collection<QuestionOptions> = {
  CHOICES?: SimplifiedChoices;
  KEY: string;
  QUESTION: QuestionOptions;
  TASK?: () => void;
};
