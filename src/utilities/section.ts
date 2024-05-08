import { updateAnswers } from '../store/answers.store';
import { FLOW_BODY, FLOW_HEAD, FLOW_TAIL } from './constants';
import { shouldContinue } from './inquirer/continue';
import { log, underline } from './logger';

export const section = async (
  title: string,
  task: () => unknown | Promise<unknown>,
  data?: Record<string, unknown> | boolean
) => {
  if (data === false) return;
  if (typeof data === 'object' && !Object.values(data).some(Boolean)) return;

  log([false], FLOW_HEAD);
  log([false], `${FLOW_BODY} `, underline(title));
  log([false], FLOW_TAIL);

  await task();
};

export const sectionWithConfirmation = (
  title: string,
  yesAnswers: AnswersAfterConfirmation,
  noAnswers: AnswersAfterConfirmation
) =>
  section(title, async () => {
    const withPrettier = await shouldContinue(`Do you want to include ${title}?`, false);

    if (withPrettier) {
      updateAnswers(await yesAnswers());
    } else {
      updateAnswers(await noAnswers());
    }
  });

type AnswersAfterConfirmation = () =>
  | Promise<Parameters<typeof updateAnswers>[0]>
  | Parameters<typeof updateAnswers>[0];
