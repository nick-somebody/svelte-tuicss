import { render, screen } from '@testing-library/svelte';
import TuiDivider from './TuiDivider.svelte';
import { expect, test } from 'vitest';

test('element is hr, by default', () => {
  render(TuiDivider);
  const hr = screen.getByRole('separator');
  expect(hr.nodeName).toBe('HR');
});

test('element is div, withSpace passed as false', () => {
  render(TuiDivider, { withSpace: false });
  const div = screen.getByRole('separator');
  expect(div.nodeName).toBe('DIV');
});
