module.exports = {
  // Определение среды выполнения, в которой будет работать код
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  // Расширения конфигураций для использования общих правил
  extends: [
    'plugin:react/recommended', // Включает рекомендуемые правила для React
    'airbnb', // Включает настройки ESLint от Airbnb (стиль кода и практики)
    'plugin:i18next/recommended', // Включает правила для работы с i18next, например, для предотвращения строковых литералов в коде
  ],
  // Парсер, который будет использоваться для TypeScript и JSX
  parser: '@typescript-eslint/parser', // Используется для поддержки TypeScript синтаксиса в ESLint
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Разрешает обработку JSX синтаксиса
    },
    ecmaVersion: 'latest', // Указывает, что следует использовать самую последнюю версию ECMAScript
    sourceType: 'module', // Указывает, что код является модулем (для использования `import`/`export`)
  },
  // Плагины для различных функциональностей, которые будут использоваться в правилах
  plugins: [
    'react', // Плагин для React, предоставляющий дополнительные правила
    '@typescript-eslint', // Плагин для TypeScript, который добавляет правила специфичные для TypeScript
    'i18next', // Плагин для работы с i18next (правила для международализации)
    'react-hooks',
  ],
  // Правила, которые будут применяться
  rules: {
    'react/jsx-indent': [2, 2], // Определяет отступы для элементов JSX (2 пробела)
    'react/jsx-indent-props': [2, 2], // Определяет отступы для пропсов в JSX (2 пробела)
    indent: [2, 2], // Основное правило отступов (2 пробела для всего кода)
    'react/jsx-filename-extension': [2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ], // Разрешает использование JSX в этих расширениях файлов
    'import/no-unresolved': 'off', // Отключает проверку на правильность импортов
    'import/prefer-default-export': 'off', // Отключает правило, требующее использования `default` экспорта
    'no-unused-vars': 'warn', // Выдает предупреждение при наличии неиспользуемых переменных
    'react/require-default-props': 'off', // Отключает правило, требующее дефолтные пропсы для всех пропсов в React компонентах
    'react/react-in-jsx-scope': 'off', // Отключает правило, требующее наличие импорта React в каждом файле с JSX (с React 17 этого не требуется)
    'react/jsx-props-no-spreading': 'off', // Выдает предупреждение на использование распространения пропсов (например, `...props`)
    'react/function-component-definition': 'off', // Отключает правило на определение типов функций компонента (можно использовать как функцию или стрелочную)
    'no-shadow': 'off', // Отключает правило на затенение переменных
    'import/extensions': 'off', // Отключает требование на указание расширений файлов при импорте
    'import/no-extraneous-dependencies': 'off', // Отключает проверку на наличие неиспользуемых зависимостей
    'no-underscore-dangle': 'off', // Отключает правило, которое запрещает использование подчеркивания в именах переменных
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to'],
    }], // Требует избегать строковых литералов для локализации (только для разметки, например, в JSX)
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
  },
  // Глобальные переменные, которые будут доступны в проекте
  globals: {
    __IS_DEV__: true, // Переменная, которая указывает, что приложение в режиме разработки
  },
  overrides: [ // Переопределение правил
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
