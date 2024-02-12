import { fireEvent, render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiSidenav from './TuiSidenav.svelte';

test('render side nav', () => {
  render(TuiSidenav);

  const nav = screen.getByRole('navigation');
  expect(nav).toBeDefined();
});

test.skip('render and click button to be active', async () => {
  render(TuiSidenav, { buttonText: 'Buttontext' });

  const button = screen.getByRole('button');
  expect(button).toBeDefined();
  await fireEvent.click(button);
  expect(button.textContent).toBe('x');
});
