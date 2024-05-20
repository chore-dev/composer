import { version } from '../../package.json';

import { log, underline } from './logger';

const MAX_LENGTH = 85;

export const separator = (count = MAX_LENGTH, text?: string) => {
  if (text) {
    const half = (count - text.length - 2) / 2;
    return `${'='.repeat(Math.floor(half))} ${text} ${'='.repeat(Math.ceil(half))}`;
  } else {
    return '='.repeat(count);
  }
};

export const APP_HEADER = () =>
  log(
    [true],
    `${separator()}

   █████╗    █████╗   ███╗   ███╗  ██████╗    █████╗    ██████╗  ███████╗  ██████╗
  ██╔══██╗  ██╔══██╗  ████╗ ████║  ██╔══██╗  ██╔══██╗  ██╔════╝  ██╔════╝  ██╔══██╗
  ██║  ╚═╝  ██║  ██║  ██╔████╔██║  ██████╔╝  ██║  ██║  ╚█████╗   █████╗    ██████╔╝
  ██║  ██╗  ██║  ██║  ██║╚██╔╝██║  ██╔═══╝   ██║  ██║   ╚═══██╗  ██╔══╝    ██╔══██╗
  ╚█████╔╝  ╚█████╔╝  ██║ ╚═╝ ██║  ██║       ╚█████╔╝  ██████╔╝  ███████╗  ██║  ██║
   ╚════╝    ╚════╝   ╚═╝     ╚═╝  ╚═╝        ╚════╝   ╚═════╝   ╚══════╝  ╚═╝  ╚═╝
           ${`v${version}`.padStart(56, ' ')} by ${underline('Chore Team')} |

  | Running under...
  | Dir : ${underline(process.cwd())}
  | Node: ${underline(process.version)}

${separator()}`
  );

export const APP_FOOTER = () => log([true, true], separator(undefined, 'ALL TASK(S) COMPLETED'));

export const FLOW_HEAD = `│\n└─┐`;
export const FLOW_BODY = '  ├─';
export const FLOW_TAIL = `┌─┘\n│`;

export const PACKAGE_MANAGERS = {
  npm: {
    isDefault: false,
    label: 'npm',
    scripts: {
      execute: 'npx --no --',
      install: (isDev = false) => `npm i${isDev ? ' --save-dev' : ' --save'}`,
      run: 'npm run'
    }
  },
  pnpm: {
    isDefault: false,
    label: 'PNPm',
    scripts: {
      execute: 'pnpm dlx',
      install: (isDev = false) => `pnpm i${isDev ? ' -D' : ''}`,
      run: 'pnpm run'
    }
  },
  yarn: {
    isDefault: true,
    label: 'Yarn',
    scripts: {
      execute: 'yarn',
      install: (isDev = false) => `yarn add${isDev ? ' -D' : ''}`,
      run: 'yarn'
    }
  }
} as const;
