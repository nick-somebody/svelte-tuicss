import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import TuiLabeledSelect from "./TuiLabeledSelect.svelte";

const label = "label";


test("labeled input renders with label", () => {
  render(TuiLabeledSelect, { id: "id", label });

  const labeledSelect = screen.getByLabelText(label);
  expect(labeledSelect).toBeDefined();
})

test("labeled input renders with class tui-block-label when block passed ", () => {
  render(TuiLabeledSelect, { id: "id", label, block: true });

  const labeledSelect = screen.getByLabelText(label);
  expect(labeledSelect.parentElement?.classList).toContain("tui-block-label");
})