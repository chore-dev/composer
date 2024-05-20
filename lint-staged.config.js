/** @type {import("lint-staged").Config} */

const config = {
  '*': ['yarn prettier:fix', 'yarn eslint:fix']
};

export default config;
