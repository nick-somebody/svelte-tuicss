import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiCheckboxSet from './TuiCheckboxSet.svelte';

const props = { heading: '', options: [{ label: '', value: '' }], group: [''] };

test('checkboxset renders', () => {
  render(TuiCheckboxSet<string>, props);

  const fieldset = screen.getByRole('group');
  expect(fieldset).toBeDefined();
});

test('checkboxset renders with description when passed', () => {
  render(TuiCheckboxSet<string>, { ...props, description: 'asdasd' });

  const description = screen.getByTestId('tui-checkbox-description');
  expect(description).toBeDefined();
});
