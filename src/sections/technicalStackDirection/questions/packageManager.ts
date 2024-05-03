import {ListQuestionOptions} from "inquirer";

import {Question, SimplifiedChoices, ValueOfChoices} from "../../../../types";
import {createList, createListChoice, massageChoices} from "../../../utilities/inquirer";

const KEY = 'packageManager' as const;

export const MANAGERS = {
  npm: {
    isDefault: false,
    key: 'npm',
    label: 'npm',
    scripts: {
      install: (isDev = false) => `npm i${isDev ? ' --save-dev' : ' --save'}`
    }
  },
  pnpm: {
    isDefault: false,
    key: 'pnpm',
    label: 'PNPm',
    scripts: {
      install: (isDev = false) => `pnpm i${isDev ? ' -D' : ''}`
    }
  },
  yarn: {
    isDefault: true,
    key: 'yarn',
    label: 'Yarn',
    scripts: {
      install: (isDev = false) => `yarn add${isDev ? ' -D' : ''}`
    }
  }
} as const;

const CHOICES = [
  [MANAGERS.npm.label, MANAGERS.npm.key],
  [MANAGERS.pnpm.label, MANAGERS.pnpm.key],
  [MANAGERS.yarn.label, MANAGERS.yarn.key, , true]
] as const satisfies SimplifiedChoices;

const PACKAGE_MANAGER_QUESTION = {
  KEY,
  CHOICES,
  OPTIONS: createList(KEY, 'Which package manager do you prefer?', massageChoices(CHOICES).map(createListChoice))
} as const satisfies Question<ListQuestionOptions>

export default PACKAGE_MANAGER_QUESTION;

export type PACKAGE_MANAGER_ANSWER = {
  [PACKAGE_MANAGER_QUESTION.KEY]: ValueOfChoices<typeof PACKAGE_MANAGER_QUESTION>;
};
