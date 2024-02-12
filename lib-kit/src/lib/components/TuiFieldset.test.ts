import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiFieldset from './TuiFieldset.svelte';

test('fieldset has disabled class when disabled', () => {
  render(TuiFieldset, { disabled: true });

  const fieldset = screen.getByRole('group');
  expect(fieldset.classList).toContain('disabled');
});

test("fieldset doesn't have disabled class when disabled is false", () => {
  render(TuiFieldset, { disabled: false });

  const fieldset = screen.getByRole('group');
  expect(fieldset.classList).not.toContain('disabled');
});

test("fieldset doesn't have disabled class by default", () => {
  render(TuiFieldset);

  const fieldset = screen.getByRole('group');
  expect(fieldset.classList).not.toContain('disabled');
});
