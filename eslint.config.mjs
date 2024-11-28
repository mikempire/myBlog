import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
        __IS_DEV__: true, // Глобальная переменная
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Поддержка JSX
        },
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,

      // Правила из старого .eslintrc.js
      'react/jsx-indent': [2, 2], // Отступы в JSX
      'react/jsx-indent-props': [2, 2], // Отступы в пропсах JSX
      indent: [2, 2], // Общие отступы
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }], // Разрешение расширений для JSX
      'import/no-unresolved': 'off', // Отключение проверки разрешения импортов
      'import/prefer-default-export': 'off', // Отключение правила на предпочтение default-экспорта
      'no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных
      'react/require-default-props': 'off', // Отключение требования для defaultProps в React
      'react/react-in-jsx-scope': 'off', // Отключение необходимости для импорта React в JSX
      'react/jsx-props-no-spreading': 'warn', // Предупреждение о распространении пропсов в JSX
      'react/function-component-definition': 'off', // Отключение правила для определения функциональных компонентов
      'no-shadow': 'off', // Отключение предупреждения о затенении переменных
      'import/extensions': 'off', // Отключение требования к расширениям при импорте
      'import/no-extraneous-dependencies': 'off', // Отключение проверки лишних зависимостей
      'no-underscore-dangle': 'off', // Отключение правила для подчеркивания в именах переменных
    },
  },
);
