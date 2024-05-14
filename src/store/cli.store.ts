import commandLineArgs from 'command-line-args';

const definitions = [
  { name: 'dry-run', alias: 'D', type: Boolean },
  { name: 'no-backup', type: Boolean },
  { name: 'preset', alias: 'P', type: String }
] as const satisfies commandLineArgs.OptionDefinition[];

const keyMap = {
  [definitions[0].name]: 'dryRun',
  [definitions[1].name]: 'noBackup'
} as const;

let CLI = Object.fromEntries(
  Object.entries(commandLineArgs(definitions)).map(([key, value]) => [
    keyMap[key as keyof typeof keyMap] || key,
    value
  ])
) as Cli;

export const getCli = () => CLI;

type Cli = {
  dryRun: boolean;
  noBackup: boolean;
  preset: string;
};
