import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import { getApplication } from '../../store/application.store';

const BACKUP_DIRECTORY = '.composer.bak';

const directoryResolverBuilder =
  (root: string | RootFn) =>
  (path = './') =>
    resolve(typeof root === 'function' ? root() : root, path);

// NOTE: This points to the current working directory,
//       DO NOT declare other path related function before this.
export const PWD = directoryResolverBuilder(process.cwd());

// NOTE: This points to dist directory,
//       ONLY pwd should declare before this.
export const DIST = directoryResolverBuilder(dirname(fileURLToPath(import.meta.url)));

/**
 * NOTE: Add directories below this comment
 */

export const backupDirectory = directoryResolverBuilder(PWD(`./${BACKUP_DIRECTORY}`));

export const datetimeDirectory = directoryResolverBuilder(() =>
  backupDirectory(getApplication().datetime)
);

export const templateDirectory = (folder: keyof Templates, file: Templates[keyof Templates]) =>
  DIST(`../src/sections/${folder}/templates/${file}`);

interface Templates {
  EditorConfig: '.editorconfig';
}

type RootFn = () => string;
