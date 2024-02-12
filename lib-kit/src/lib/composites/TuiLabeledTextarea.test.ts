import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import TuiLabeledTextarea from './TuiLabeledTextarea.svelte';

const label = 'label';

test('labeled input renders with label', () => {
  render(TuiLabeledTextarea, { id: 'id', label });

  const labeledTextarea = screen.getByLabelText(label);
  expect(labeledTextarea).toBeDefined();
});

test('labeled input renders with class tui-block-label when block passed ', () => {
  render(TuiLabeledTextarea, { id: 'id', label, block: true });

  const labeledTextarea = screen.getByLabelText(label);
  expect(labeledTextarea.parentElement?.classList).toContain('tui-block-label');
});
