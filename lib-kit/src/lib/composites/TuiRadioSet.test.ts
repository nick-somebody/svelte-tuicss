import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiRadioSet from './TuiRadioSet.svelte';

const props = { heading: '', options: [{ label: '', value: '' }], selected: '' };

test('render nav bar', () => {
  render(TuiRadioSet<string>, props);

  const radioset = screen.getByRole('group');
  expect(radioset).toBeDefined();
});

test('render nav bar with description', () => {
  render(TuiRadioSet<string>, { ...props, description: 'asdasd' });

  const description = screen.getByTestId('tui-radio-description');
  expect(description).toBeDefined();
});
