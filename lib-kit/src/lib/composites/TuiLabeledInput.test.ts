import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiLabeledInput from './TuiLabeledInput.svelte';

const label = 'label';

test('labeled input renders with label', () => {
  render(TuiLabeledInput, { id: 'id', label });

  const labeledInput = screen.getByLabelText(label);
  expect(labeledInput).toBeDefined();
});

test('labeled input renders with class tui-block-label when block passed ', () => {
  render(TuiLabeledInput, { id: 'id', label, block: true });

  const labeledInput = screen.getByLabelText(label);
  expect(labeledInput.parentElement?.classList).toContain('tui-block-label');
});
