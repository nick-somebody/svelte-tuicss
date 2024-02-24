import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    coverage: {
      exclude: [
        '.svelte-kit',
        'dist',
        'svelte.config.js',
        '.eslintrc.cjs',
        '**/*.d.ts',
        'src/routes'
      ],
      provider: 'v8'
    }
  }
});
