module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  globals: {
    NodeJS: true,
    JSX: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:astro/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'prettier'],
  rules: {
    'react/no-danger': 'off',
    'max-lines': ['error', { max: 300, skipBlankLines: true }],
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-key': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'react/no-unused-prop-types': 'off',
    camelcase: 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/jsx-newline': ['error', { prevent: true, allowMultilines: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'expression', next: 'return' },
      { blankLine: 'always', prev: 'const', next: 'return' },
    ],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: 'always',
        printWidth: 120,
      },
    ],
    'import/extensions': [
      'error',
      'never',
      ['png', 'scss', 'css', 'json', 'jpg', 'svg'].reduce((acc, k) => ({ ...acc, [k]: 'always' }), {}),
    ],
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'react/jsx-filename-extension': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': 'off',
        'react/jsx-newline': 'off',
        'react/self-closing-comp': 'off',
        'react/no-unescaped-entities': 'off',
        'react/jsx-key': 'off', // Astro doesn't use React keys
        'import/extensions': 'off',
        'import/order': 'off',
        'import/no-unresolved': 'off', // Disable import resolution for Astro files
        'import/named': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-duplicates': 'off',
        'import/no-self-import': 'off',
        'import/no-cycle': 'off',
        'import/no-relative-packages': 'off',
        'import/prefer-default-export': 'off',
        'padding-line-between-statements': 'off',
        'prettier/prettier': 'off',
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      env: {
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    // {
    //   files: ['vite.config.ts', 'vitest.config.ts'],
    //   parserOptions: {
    //     project: './tsconfig.vite.json',
    //   },
    //   rules: {
    //     'import/no-extraneous-dependencies': 'off',
    //   },
    // },
    // {
    //   files: ['./src/theme/**/*'],
    //   rules: {
    //     '@typescript-eslint/consistent-type-definitions': 'off',
    //     '@typescript-eslint/no-explicit-any': 'off',
    //     'no-param-reassign': 'off',
    //     '@typescript-eslint/ban-ts-comment': 'off',
    //     '@typescript-eslint/no-unused-vars': 'off',
    //     'react/jsx-no-useless-fragment': 'off',
    //     'no-use-before-define': 'off',
    //     'import/prefer-default-export': 'off',
    //     'no-restricted-exports': 'off',
    //     'default-param-last': 'off',
    //   },
    // },
    // {
    //   files: ['./*.ts'],
    //   rules: {
    //     'import/no-extraneous-dependencies': 'off',
    //   },
    // },
    {
      files: ['./**/*.enum.ts', 'type/**/*.ts', './**/*.type.ts'],
      rules: {
        'no-use-before-define': 'off',
        'no-shadow': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'max-lines': 'off',
        'no-prototype-builtins': 'off',
        'no-nested-ternary': 'off',
        'no-empty': 'off',
        'no-plusplus': 'off',
        'no-return-assign': 'off',
        'no-param-reassign': 'off',
        'no-restricted-globals': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['src/content/config.ts'],
      rules: {
        'import/prefer-default-export': 'off', // Astro content config requires named export
        'import/no-unresolved': 'off', // Disable import resolution
        'import/order': 'off',
        'import/named': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-duplicates': 'off',
        'import/no-self-import': 'off',
        'import/no-cycle': 'off',
        'import/no-relative-packages': 'off',
      },
    },
  ],
};
