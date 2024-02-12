import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiDropdown from './TuiDropdown.svelte';

test('dropdown renders', () => {
  render(TuiDropdown, { label: 'label' });

  const dropdown = screen.getByRole('listitem');
  expect(dropdown).toBeDefined();
});
