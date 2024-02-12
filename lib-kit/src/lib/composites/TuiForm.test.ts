import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiForm from './TuiForm.svelte';

test('form renders with description', () => {
  render(TuiForm, { heading: '', description: 'description' });

  const description = screen.getByTestId('tui-inputset-description');
  expect(description).toBeDefined();
});
