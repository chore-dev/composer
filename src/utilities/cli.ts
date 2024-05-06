import {execSync} from 'child_process';

import {MANAGERS} from "../onboarding/questions/packageManager";
import {getAnswers} from "../store/answers.store";

import {pwd} from "./fs/constants";
import {task} from "./logger";

const execInPwd = (command: string) => execSync(`cd ${pwd()} && ${command}`);

export const managerInstall = (packages: string, isDev = false) => {
  const install = MANAGERS[getAnswers().packageManager].scripts.install;

  task([false], `Installing ${packages}...`);
  execInPwd(`${install(isDev)} ${packages}`);
  task([false, true], `Installed!`);
}
