import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Allow JSX in .js files
      jsxImportSource: 'react',
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    }),
  ],
});
