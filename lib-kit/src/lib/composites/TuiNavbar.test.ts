import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiNavbar from './TuiNavbar.svelte';

test('render nav bar', () => {
  render(TuiNavbar);

  const nav = screen.getByRole('navigation');
  expect(nav).toBeDefined();
});
