import {DateTime} from "luxon";
import {askOnBoardingQuestions} from "./onboarding";

import {askEditorConfigQuestions, doEditorConfigTasks} from "./sections/EditorConfig";
import {askTypesScriptQuestions, doTypesScriptTasks} from "./sections/TypeScript";
import {getAnswers} from "./store/answers.store";
import {updateApplication} from "./store/application.store";
import {getCli} from "./store/cli.store";
import {APP_FOOTER, APP_HEADER, separator} from "./utilities/constants";
import {isPathExist} from "./utilities/fs";
import {pwd} from "./utilities/fs/constants";
import {shouldContinue} from "./utilities/inquirer/continue";
import {box, error, log} from "./utilities/logger";

APP_HEADER();

const isDryRun = () => {
  if (getCli().dryRun) {
    log([true], separator(undefined, 'DRY RUN RESULT'));
    log([true], getAnswers());
    log([true], 'As dry-run is enabled, no changes were made to the project');
    return true;
  }

  return false;
}

const isValidEnvironment = async () => {
  let valid = true;

  if (!isPathExist(pwd('./package.json'))) {
    error([true], `package.json not found`);
    error([false], `Please be sure to run composer under the root directory.`);
    error([true], `or`);
    error([true], `If you are already in the root directory`);
    error([false], `Initialize a new project by running:`);
    box(error, [false], [
      '$ npm init      ',
      '',
      '# or',
      '',
      '$ pnpm init',
      '',
      '# or',
      '',
      '$ yarn init'
    ]);

    valid = false
  }

  return valid;
}

(async () => {
  new Promise<void>(async (resolve) => {
    updateApplication({datetime: DateTime.now().toFormat('yyyy-MM-dd_HH-mm-ss')});

    try {
      if (!await isValidEnvironment()) return resolve();

      // Questions
      await askOnBoardingQuestions();
      await askEditorConfigQuestions();
      await askTypesScriptQuestions();

      if (isDryRun()) return resolve();

      log([true], separator());
      log([true], `ℹ Before proceed to the next step, please review the answers you have given`);
      if (!(await shouldContinue())) return resolve();

      log([true], separator(undefined, 'TASK(S) STARTED'));

      // Tasks
      await doEditorConfigTasks();
      await doTypesScriptTasks();

      resolve();
    } catch (e) {
      const _error = e as Error & Record<string, unknown>;

      if (_error.isTtyError) {
        error([true], `Prompt couldn't be rendered in the current environment`);
      } else {
        error([true], `Something went wrong: ${_error}`);
      }
    }
  }).finally(() => {
    APP_FOOTER();
  });
})();
