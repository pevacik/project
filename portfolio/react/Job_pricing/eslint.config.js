import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // Игнорируемые папки
  { ignores: ['dist', 'node_modules', 'build'] },
  
  // Базовые рекомендации JS и TS
  js.configs.recommended,
  ...tseslint.configs.recommended,
  
  // Настройки для React и React Hooks
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Не нужно для React 17+
    },
    settings: {
      react: { version: 'detect' }, // Автоопределение версии React
    },
  },
  
  // Отключение конфликтов форматирования (всегда в самом конце!)
  eslintConfigPrettier
);
