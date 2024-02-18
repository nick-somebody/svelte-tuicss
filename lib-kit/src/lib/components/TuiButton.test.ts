import { render, screen } from '@testing-library/svelte';
import TuiButton from './TuiButton.svelte';
import { expect, test } from 'vitest';
import { MildColor } from '$lib/enums.js';

test('render button', () => {
  render(TuiButton);

  const button = screen.getByRole('button');
  expect(button.classList).toContain('tui-button');
});

test('render button with fullWidth prop === true', () => {
  render(TuiButton, { fullWidth: true });

  const button = screen.getByRole('button');
  expect(button.classList).toContain('fill');
});
test('render button with light prop === true', () => {
  render(TuiButton, { light: true });

  const button = screen.getByRole('button');
  expect(button.classList).toContain('light');
});
test('render button with disabled prop === true', () => {
  render(TuiButton, { disabled: true });

  const button = screen.getByRole('button');
  expect(button.classList).toContain('disabled');
  expect(button.getAttribute('disabled')).toBeDefined();
});

test('render button with color prop === MildColor.Black', () => {
  render(TuiButton, { color: MildColor.Black });

  const button = screen.getByRole('button');
  expect(button.classList).toContain(MildColor.Black);
});

test('render button with color textColor === MildColor.Red', () => {
  render(TuiButton, { textColor: MildColor.Red });

  const button = screen.getByRole('button');
  expect(button.classList).toContain(`${MildColor.Red}-text`);
});
