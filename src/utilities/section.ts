import { updateAnswers } from '../store/answers.store';
import { FLOW_BODY, FLOW_HEAD, FLOW_TAIL } from './constants';
import { shouldContinue } from './inquirer/continue';
import { log, underline } from './logger';

export const section = async (title: string, task: (() => unknown | Promise<unknown>) | false) => {
  if (task === false) return;

  log([false], FLOW_HEAD);
  log([false], `${FLOW_BODY} `, underline(title));
  log([false], FLOW_TAIL);

  await task();
};

export const sectionWithConfirmation = (
  title: string,
  yesAnswers: AnswersAfterConfirmation,
  noAnswers: AnswersAfterConfirmation
) => {
  return section(title, async () => {
    const included = await shouldContinue(`Do you want to include ${title}?`, false);

    if (included) {
      updateAnswers(await yesAnswers());
    } else {
      updateAnswers(await noAnswers());
    }
  });
};

type AnswersAfterConfirmation = () =>
  | Promise<Parameters<typeof updateAnswers>[0]>
  | Parameters<typeof updateAnswers>[0];
