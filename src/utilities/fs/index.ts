import { copyFileSync, existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'fs';

import { getCli } from '../../store/cli.store';
import { task, warn } from '../logger';

import { backupDirectory, datetimeDirectory, PWD } from './constants';

const backup = (path: string) => {
  if (getCli().noBackup || !isPathExist(path)) return;

  if (!isPathExist(backupDirectory())) mkdirSync(backupDirectory());
  if (!isPathExist(datetimeDirectory())) mkdirSync(datetimeDirectory());

  const filename = path.split('/').pop();

  if (isPathExist(datetimeDirectory(`./${filename}`))) return;

  warn([false], `Existing ${filename} under ${path} found`);
  warn([false], `Backing up...`);
  renameSync(path, datetimeDirectory(`./${filename}`));
  warn([false], `Backup successful! Please find backup file(s) in ${datetimeDirectory()}`);
};

export const backupBeforeCopy = (from: string, to: string) => {
  backup(to);

  task([false], `Creating ${to}...`);
  copyFileSync(from, to);
  task([false, true], `Created!`);
};

export const backupBeforeWrite = (to: string, content: string | Record<string, unknown>) => {
  backup(to);

  task([false], `Creating ${to}...`);
  writeFileSync(to, typeof content === 'string' ? content : JSON.stringify(content, null, 2));
  task([false, true], `Created!`);
};

export const isPathExist = (path: string) => existsSync(path);

export const readJson = (path: string) => JSON.parse(readFileSync(path, 'utf8'));

export const readPackageJson = () => readJson(PWD('./package.json'));
