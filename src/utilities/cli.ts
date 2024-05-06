import {execSync} from 'child_process';

import {getAnswers} from "../store/answers.store";

import {PACKAGE_MANAGERS} from "./constants";
import {pwd} from "./fs/constants";
import {task} from "./logger";

const execInPwd = (command: string) => execSync(`cd ${pwd()} && ${command}`);

export const managerInstall = (packages: string, isDev = false) => {
  const install = PACKAGE_MANAGERS[getAnswers().packageManager].scripts.install;

  task([false], `Installing ${packages}...`);
  execInPwd(`${install(isDev)} ${packages}`);
  task([false, true], `Installed!`);
}
