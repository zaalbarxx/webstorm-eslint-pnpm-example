const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2023: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@intlify/vue-i18n/recommended',
        '@nuxtjs/eslint-config-typescript',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module',
        parser: {
            js: 'espree',
            ts: '@typescript-eslint/parser',
        },
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true
        },
    },
    plugins: [
        '@typescript-eslint',
    ],
    settings: {
        'vue-i18n': {
            localeDir: './src/assets/locales/*.json',
            messageSyntaxVersion: '^9.0.0'
        }
    },
    rules: {
        curly: [2, 'all'],
        indent: ['error', 4],
        'object-curly-spacing': [2, 'always'],
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        'semi': [1, 'always'],
        'func-call-spacing': 'off',
        'import/first': 'off',
        'import/order': 'off',
        'comma-dangle': 'off',
        'arrow-parens': [2, 'always'],
        'no-console': isProduction ? 'error' : 'off',
        'no-debugger': isProduction ? 'error' : 'off',
        'no-empty': ['error', { allowEmptyCatch: true }],
        "no-shadow": 'off',
        'prettier/prettier': 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        'vue/no-v-html': 0,
        'vue/multi-word-component-names': 0,
        'vue/max-attributes-per-line': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/no-reserved-component-names': 0,
        'vue/v-slot-style': [
            'error',
            {
                atComponent: 'v-slot',
                default: 'longform',
                named: 'longform',
            },
        ],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: false,
                ignores: ['transition', 'component', 'keep-alive', 'i18n-t'],
            },
        ],
        'vue/custom-event-name-casing': ['error', 'camelCase'],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/v-on-event-hyphenation': [
            'error',
            'never',
            {
                autofix: false,
                ignore: ['after-appear', 'after-leave'],
            },
        ],
        'vue/v-on-function-call': ['error', 'always'],
        'vue/html-button-has-type': 'error',
        'vue/no-static-inline-styles': ['error', { allowBinding: true }],
        'vue/html-indent': 0,
        'vue/no-useless-mustaches': [
            'error',
            {
                ignoreIncludesComment: false,
                ignoreStringEscape: false,
            },
        ],
        'vue/no-useless-v-bind': [
            'error',
            {
                ignoreIncludesComment: false,
                ignoreStringEscape: false,
            },
        ],
        'vue/no-template-target-blank': [
            'error',
            {
                allowReferrer: true,
                enforceDynamicLinks: 'always',
            },
        ],
        'vue/match-component-file-name': [
            'error',
            {
                extensions: ['vue'],
                shouldMatchCase: true,
            },
        ],
        'vue/next-tick-style': ['error', 'promise'],
        'vue/no-bare-strings-in-template': 'warn',
        'vue/no-multiple-objects-in-class': 'warn',
        'vue/no-potential-component-option-typo': 'error',
        'vue/no-mutating-props': 'error',
        '@intlify/vue-i18n/no-raw-text': [
            'error',
            {
                ignoreNodes: ['app-raw-text', 'AppRawText', 'null', null],
                ignorePattern: '^[#:()&|+*/-]+$', // globally allowed characters
                ignoreText: ['EUR', 'HKD', 'USD', 'null', null],
            },
        ],
        '@intlify/vue-i18n/no-missing-keys': 'off',
        '@intlify/vue-i18n/valid-message-syntax': 'error',
        '@intlify/vue-i18n/no-deprecated-i18n-component': 0,
    }
}
