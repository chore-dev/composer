import { getAnswers } from '../../../../store/answers.store';

// Read https://www.typescriptlang.org/tsconfig for more information about tsconfig.json
const createTsConfigJson = () => {
  const { withSyntaxExtension } = getAnswers();

  return {
    exclude: [
      '.composer.bak',
      'bower_components',
      'jspm_packages',
      'node_modules',
      // Output directories
      'build',
      'bundle',
      'core',
      'coverage',
      'dist',
      'storybook-static',
      'out'
    ],
    include: [
      '**/*.d.ts',
      '**/*.js',
      ...(withSyntaxExtension ? ['**/*.jsx'] : []),
      '**/*.ts',
      ...(withSyntaxExtension ? ['**/*.tsx'] : []),
      '@types',
      'types'
    ],
    compilerOptions: {
      /** Completeness **/
      skipLibCheck: true,

      /** Emit **/
      declaration: true,
      '// declarationDir': '// TODO: TO BE DECIDED', // The value of "declarationDir" is depending on the project, please set it manually
      declarationMap: true,
      importHelpers: true,
      '// noEmit': '// TODO: TO BE DECIDED', // The value of "noEmit" is depending on the project, please set it manually,
      '// outDir': '// TODO: TO BE DECIDED', // The value of "outDir" is depending on the project, please set it manually
      // preserveConstEnums: true, // Already turned on by "isolatedModules"
      removeComments: true,
      sourceMap: true,

      /** Interop Constraints **/
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      isolatedModules: true,

      /** JavaScript Support **/
      allowJs: true,
      checkJs: true,

      /** Language and Environment **/
      experimentalDecorators: true,
      ...(withSyntaxExtension ? { jsx: 'react-jsx' } : {}),
      lib: ['DOM', 'DOM.Iterable', 'ESNext', 'WebWorker'],
      target: 'esnext',

      /** Modules **/
      allowArbitraryExtensions: true,
      module: 'esnext',
      moduleResolution: 'node', // Using "nodenext" will cause https://github.com/microsoft/TypeScript/issues/49083, please note before using it
      resolveJsonModule: true,
      '// rootDir': '// TODO: TO BE DECIDED', // The value of "rootDir" is depending on the project, please set it manually

      /** Projects **/
      incremental: true,

      /** Type checking **/
      allowUnusedLabels: false,
      // alwaysStrict: true, // Already turned on by "strict"
      noFallthroughCasesInSwitch: true,
      // noImplicitAny: true, // Already turned on by "strict"
      noImplicitOverride: true,
      noImplicitReturns: true,
      // noImplicitThis: true, // Already turned on by "strict"
      noUncheckedIndexedAccess: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      strict: true // Will also turn on the following flags: "alwaysStrict", "strictNullChecks", "strictBindCallApply", "strictFunctionTypes", "strictPropertyInitialization", "noImplicitAny", "noImplicitThis", "useUnknownInCatchVariable"
      // strictBindCallApply: true, // Already turned on by "strict"
      // strictFunctionTypes: true, // Already turned on by "strict"
      // strictNullChecks: true, // Already turned on by "strict"
      // strictPropertyInitialization: true, // Already turned on by "strict"
      // useUnknownInCatchVariables: true, // Already turned on by "strict"
    },
    watchOptions: {},
    typeAcquisition: {}
  };
};

export default createTsConfigJson;
