import { execSync } from 'child_process';
import { readFileSync } from 'fs';

import { getAnswers } from '../store/answers.store';

import { PACKAGE_MANAGERS } from './constants';
import { backupBeforeWrite, isPathExist } from './fs';
import { PWD } from './fs/constants';
import { error, task } from './logger';

export const addScriptToPackageJson = (scripts: Array<[string, string]>) => {
  if (!isPathExist(PWD('./package.json'))) {
    error(
      [true, true],
      `Failed to add script to package.json. package.json not found, run \`${managerRun('init')}\` first.`
    );
    return;
  }

  const json = JSON.parse(readFileSync(PWD('./package.json'), 'utf8'));

  const update: Record<string, string> = { ...json.scripts };

  scripts.forEach(([key, value]) => {
    if (key in update) update[`// composer-backup-${key}`] = `${update[key]}`;
    update[key] = value;
  });

  json.scripts = update;

  backupBeforeWrite(PWD('./package.json'), json);
};

export const execInPwd = (command: string) => execSync(`cd ${PWD()} && ${command}`);

export const managerInstall = (packages: string | Array<string | false>, isDev = false) => {
  const _packages = Array.isArray(packages) ? packages.filter(Boolean).join(' ') : packages;

  const install = PACKAGE_MANAGERS[getAnswers().packageManager].scripts.install;

  task([false], `Installing ${_packages}...`);
  execInPwd(`${install(isDev)} ${_packages}`);
  task([false, true], `Installed!`);
};

export const managerRun = (script: string) => {
  return `${PACKAGE_MANAGERS[getAnswers().packageManager].scripts.run} ${script}`;
};
