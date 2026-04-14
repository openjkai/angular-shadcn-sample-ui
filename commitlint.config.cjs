/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'subject-case': [2, 'never', ['pascal-case', 'upper-case']],
    /**
     * Entire first line (type, scope, subject). Default conventional config is often 100; this repo
     * uses 120 so Cursor/IDE auto-generated subjects (often 100–115 chars) still pass. Keep subjects
     * short anyway — put detail in the body after a blank line.
     */
    'header-max-length': [2, 'always', 120],
  },
};
