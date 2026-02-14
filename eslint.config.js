import storybook from 'eslint-plugin-storybook'
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react'

export default defineConfig([
    globalIgnores(['dist', '.storybook/**']),
    {
        files: ['**/*.{js,jsx}'],
        plugins: {
            react
        },
        extends: [
            js.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module'
            }
        },
        rules: {
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'react/jsx-uses-vars': 'error'
        }
    },
    // tests
    {
        files: ['**/*.test.{js,jsx,ts,tsx}'],
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                vi: 'readonly'
            }
        }
    },

    {
        files: ['vite.config.*'],
        languageOptions: {
            globals: {
                __dirname: 'readonly',
                process: 'readonly'
            }
        }
    },

    ...storybook.configs['flat/recommended']
])
