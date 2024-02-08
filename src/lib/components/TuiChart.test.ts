import { render, screen } from '@testing-library/svelte'
import TuiChart from './TuiChart.svelte'
import { expect, test } from 'vitest'

const props = { size: { width: "100px", height: "100px" }, values: [], labels: [] }
const value = { value: 10, label: "10%" }
const minValue = 10;
const maxValue = 110;
test("render vertical chart", () => {
  render(TuiChart, props)

  const chart = screen.getByRole("figure")
  expect(chart.classList).toContain("tui-chart-vertical")
  expect(chart.classList).not.toContain("tui-chart-horizontal")
})
test("render vertical bar value with correct style", () => {
  render(TuiChart, { ...props, values: [value] })

  const bar = screen.getByRole("meter")
  expect(bar.style.height).toEqual(`${value.value}%`)
  expect(bar.style.width).toBeFalsy()
})
test("render horizontal chart", () => {
  render(TuiChart, { horizontal: true, ...props })

  const chart = screen.getByRole("figure")
  expect(chart.classList).not.toContain("tui-chart-vertical")
  expect(chart.classList).toContain("tui-chart-horizontal")
})
test("render horizontal bar value with correct style", () => {
  render(TuiChart, { horizontal: true, ...props, values: [value] })

  const bar = screen.getByRole("meter")
  expect(bar.style.width).toEqual(`${value.value}%`)
  expect(bar.style.height).toBeFalsy()
})

test("render bar aria-valuemin with default min value", () => {
  render(TuiChart, { ...props, values: [value] })

  const bar = screen.getByRole("meter")
  expect(bar.getAttribute("aria-valuemin")).toEqual("0")
})

test("render bar aria-valuemax  with default max value", () => {
  render(TuiChart, { ...props, values: [value] })

  const bar = screen.getByRole("meter")
  expect(bar.getAttribute("aria-valuemax")).toEqual("100")
})

test("render  bar aria-valuetext value with default valueFormatter", () => {
  render(TuiChart, { ...props, values: [value] })

  const bar = screen.getByRole("meter")
  expect(bar.getAttribute("aria-valuetext")).toEqual(`${value.value}%`)
})

test("render bar aria-valuemin with default 0", () => {
  render(TuiChart, { ...props, values: [value] })

  const bar = screen.getByRole("meter")
  expect(bar.getAttribute("aria-valuemin")).toEqual("0")
})
test("render bar aria-valuemin with minValue", () => {
  render(TuiChart, { ...props, minValue, values: [value] })

  const bar = screen.getByRole("meter")
  expect(bar.getAttribute("aria-valuemin")).toEqual(`${minValue}`)
})

test("render bar aria-valuemax with default 0", () => {
  render(TuiChart, { ...props, values: [value] })

  const bar = screen.getByRole("meter")
  expect(bar.getAttribute("aria-valuemax")).toEqual("100")
})

test("render bar aria-valuemax with maxValue", () => {
  render(TuiChart, { ...props, maxValue, values: [value] })

  const bar = screen.getByRole("meter")
  expect(bar.getAttribute("aria-valuemax")).toEqual(`${maxValue}`)
})

test("render chart with labels", () => {
  render(TuiChart, { ...props, values: [value], labels: ["test"] })

  const xAxis = screen.getAllByTestId("chart-x-axis");
  const yAxis = screen.getAllByTestId("chart-y-axis");
  expect(xAxis.length).greaterThanOrEqual(1)
  expect(yAxis.length).greaterThanOrEqual(1)
})
