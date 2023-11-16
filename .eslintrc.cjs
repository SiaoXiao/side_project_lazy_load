const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx', '.json']

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-essential', 'prettier', './.eslintrc-auto-import.json'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'import', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: ['vite.config.js']
      }
    ],
    'vue/multi-word-component-names': 'off',
    'no-console': 'off',
    'prettier/prettier': ['error']
  },
  settings: {
    // 解決 Unable to resolve path to module
    'import/resolver': {
      node: {
        extensions: allExtensions
      },
      alias: {
        map: [['@', './src']]
      }
    }
  }
}
