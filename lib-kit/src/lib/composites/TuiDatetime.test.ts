import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiDatetime from './TuiDatetime.svelte';

test('datetime renders', () => {
  render(TuiDatetime, { formatString: 'dd-mm-yyyy' });

  const datetime = screen.getByTestId('tui-datetime');
  expect(datetime).toBeDefined();
});
