import { fireEvent, render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import TuiModal from "./TuiModal.svelte";

test("render modal", async () => {
  render(TuiModal, { modalTitle: "title" });

  const button = screen.getByRole("button");
  expect(button).toBeDefined();
})

// testing suite doesn't render dialog properly
test.skip("render modal and summon dialog", async () => {
  render(TuiModal, { modalTitle:"title" });

  const button = screen.getByRole("button");
  await fireEvent.click(button);

  const dialog = screen.getByRole("dialog");
  expect(dialog).toBeDefined();
})