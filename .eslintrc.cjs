module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    React: 'readonly',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: true,
    //   },
    // ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'react/self-closing-comp': 'off',
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
  },
};
