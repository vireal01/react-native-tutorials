module.exports = {
  root: true,
  extends: ['plugin:react/recommended', '@react-native-community/eslint-config'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['react', 'react-native', 'import', 'prettier', 'detox'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/ignore': ['node_modules/react-native/index\\.js$']
  },
  env: {
    es6: true,
    'react-native/react-native': true,
    'detox/detox': true,
    'jest/globals': true
  },
  globals: {
    console: true,
    require: true,
    __DEV__: true,
    global: true,
    mf: true,
    app: true,
    tron: true,
    setTimeout: true,
    clearTimeout: true,
    requestAnimationFrame: true,
    logEvent: true,
    FormData: true,
    AbortController: true
  },
  rules: {
    eqeqeq: 'error',
    'comma-dangle': ['error', 'never'],
    'no-shadow': 'off',
    'no-console': 'error',
    'default-case': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'prefer-template': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/no-duplicates': 'error',
    'require-await': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': ['warn', 'never'],
    'react-native/no-inline-styles': 0,
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_$'
      }
    ],
    'no-undef': 'error',
    'prettier/prettier': ['off', {}, { usePrettierrc: true }],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ]
  },
  overrides: [
    {
      files: ['e2e/docs/*', 'incrementBuildNumber.js'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
};
