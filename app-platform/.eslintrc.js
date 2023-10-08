module.exports = {
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'airbnb/hooks'],
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y'],
  rules: {
    'no-console': [2, { allow: ['warn', 'error', 'info'] }],
    'no-debugger': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/no-danger': 0,
    'import/no-unresolved': 0,
    'import/no-dynamic-require': 0,
    'linebreak-style': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 1,
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 1,
    'import/extensions': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    indent: 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'dot-notation': [0, { allowKeywords: true }],
    'spaced-comment': [0, { before: false, after: true }],
    'comma-dangle': 0,
    'space-before-function-paren': ['error', 'never'],
    eqeqeq: 2,
    radix: 0,
    'one-var': 2,
    'no-restricted-globals': ['error', 'history'],
    'global-require': 0,
    'no-param-reassign': 0,
    'no-script-url': 'error',
    'no-else-return': 'error',
    'no-restricted-syntax': 'error',
    'no-extend-native': 'error',
    'no-return-assign': 1,
    'no-underscore-dangle': 'off',
    'no-unused-expressions': 0,
    'max-len': [
      'error',
      {
        code: 200,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-plusplus': 0,
    'no-trailing-spaces': 'off',
    'react/no-did-update-set-state': 'error',
    'react/no-unused-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/jsx-indent': [2, 2],
    'no-prototype-builtins': 'error',
    'no-nested-ternary': 'error',
    'react/jsx-no-target-blank': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'no-empty-function': 1,
    'no-multiple-empty-lines': [1, { max: 2 }],
    'react/no-unused-prop-types': 'off',
    camelcase: 0,
    'func-names': 0,
    'max-classes-per-file': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'no-continue': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/function-component-definition':'off',
    
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    NodeJS: 'readonly',
    JSX: 'readonly',
  },
};
