import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiInput from './TuiInput.svelte';

test('input has disabled class when prop disabled is true', () => {
  render(TuiInput, { disabled: true });

  const input = screen.getByRole('textbox');
  expect(input.classList).toContain('disabled');
});

test('input has no disabled class when prop disabled is false', () => {
  render(TuiInput, { disabled: false });

  const input = screen.getByRole('textbox');
  expect(input.classList).not.toContain('disabled');
});

test('input has no disabled class by default', () => {
  render(TuiInput);

  const input = screen.getByRole('textbox');
  expect(input.classList).not.toContain('disabled');
});
