import {copyFileSync, existsSync, mkdirSync, renameSync} from "fs";

import {getCli} from "../../store/cli.store";
import {task, warn} from "../logger";

import {backupDirectory, datetimeDirectory} from "./constants";

const backup = (path: string) => {
  if (!getCli().noBackup) {
    if (isPathExist(path)) {
      if (!isPathExist(backupDirectory())) mkdirSync(backupDirectory());
      if (!isPathExist(datetimeDirectory())) mkdirSync(datetimeDirectory());

      const filename = path.split('/').pop();

      warn([false], `Existing ${filename} under ${path} found`);
      warn([false], `Backing up...`);
      renameSync(path, datetimeDirectory(`./${filename}`));
      warn([false], `Backup successful! Please find backup file(s) in ${datetimeDirectory()}`);
    }
  }
}

export const backupBeforeCopy = (from: string, to: string) => {
  backup(to);

  task([false], `Creating ${to}...`);
  copyFileSync(from, to);
  task([false, true], `Success!`);
}

export const isPathExist = (path: string) => existsSync(path);
