import { render, screen } from '@testing-library/svelte';
import { TuiMenuItem } from '.';
import { expect, test } from 'vitest';

test('menuitem renders as button by default', () => {
  render(TuiMenuItem);

  const button = screen.getByRole('button');
  expect(button).toBeDefined();
});

test("menuitem renders as button when type is 'button'", () => {
  render(TuiMenuItem, { type: 'button' });

  const button = screen.getByRole('button');
  expect(button).toBeDefined();
});

test("menuitem renders as link when type is 'link'", () => {
  render(TuiMenuItem, { type: 'link' });

  const link = screen.getByRole('link');
  expect(link).toBeDefined();
});

test("menuitem renders as div when type is 'text'", () => {
  render(TuiMenuItem, { type: 'text' });

  const div = screen.getByTestId('menuitem-text');
  expect(div).toBeDefined();
});
