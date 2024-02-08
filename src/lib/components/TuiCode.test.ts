import { render, screen } from '@testing-library/svelte'
import TuiCode from './TuiCode.svelte'
import { expect, test } from 'vitest'
import { Color, MildColor } from '../enums'

test("ensure defaults are added to class", () => {
  render(TuiCode, {
    code: "<div></div>"
  })

  const code = screen.getByRole("figure")
  const pre = code.parentElement;
  expect(pre!.classList).toContain(MildColor.White);
  expect(pre!.classList).toContain(`${MildColor.Black}-text`);
});

test("ensure defaults are added to class for dark prop", () => {
  render(TuiCode, {
    code: "<div></div>",
    dark: true,
  })

  const code = screen.getByRole("figure")
  const pre = code.parentElement;
  expect(pre!.classList).toContain(MildColor.Black);
  expect(pre!.classList).toContain(`${MildColor.Cyan}-text`);
});

test("ensure color is added to class", () => {
  render(TuiCode, {
    code: "<div></div>",
    color: Color.Black,
    textColor: Color.White,
  })

  const code = screen.getByRole("figure")
  const pre = code.parentElement;
  expect(pre!.classList).toContain(Color.Black)
});

test("ensure textColor is added to class", () => {
  render(TuiCode, {
    code: "<div></div>",
    color: Color.Black,
    textColor: Color.White,
  });

  const code = screen.getByRole("figure")
  const pre = code.parentElement;
  expect(pre!.classList).toContain(`${Color.White}-text`)
});

test("ensure class is passed to pre", () => {
  render(TuiCode, {
    code: "<div></div>",
    color: Color.Black,
    class: "test-class"
  })

  const code = screen.getByRole("figure")
  const pre = code.parentElement;
  expect(pre!.classList).toContain("test-class")
})