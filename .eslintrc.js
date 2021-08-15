module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'prettier',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],

  plugins: ['vue', 'import'],

  rules: {
    // Disabled
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',

    // Warning
    'array-bracket-spacing': ['warn'],
   
    'block-spacing': ['warn'],
    'comma-style': ['warn'],
    'func-call-spacing': ['warn'],
    'key-spacing': ['warn'],
    'keyword-spacing': ['warn'],
    'no-useless-escape': ['warn'],
    'space-before-blocks': ['warn'],
    'space-infix-ops': ['warn'],
    'space-in-parens': ['warn'],
    'no-floating-decimal': ['warn'],

    // Error
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'comma-dangle': ['error', 'always-multiline'],
    'import/extensions': ['error', 'never', { png: 'always', css:'always' }],
    'max-lines': ['error', 1440], // increased heavily for inline jsdoc comment
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-param-reassign': ['error', { props: false }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'semi': ['error', 'always'],
    'no-else-return': ['error'],
  },

  settings: {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      node: {
        paths: ['*'],
        extensions: ['.js', '.vue', '.css'],
      },
    },
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
