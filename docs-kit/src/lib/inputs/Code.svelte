<script>
  import { TuiCode } from "svelte-tuicss";
</script>

<TuiCode dark code={ `
<div class="tui-window" style:textAlign="left">
  <h2>Inputs</h2>
  <TuiForm
    heading="Form"
  >
    <TuiLabeledInput
      id="input"
      label="Text.......: "
      value={text}
      on:change={handleChange}
    />
    <TuiLabeledInput
      id="disabled-input"
      label="Disabled...: "
      value={text}
      disabled
      on:change={handleChange}
    />
    <TuiLabeledInput
      id="number-input"
      label="Number.....: "
      type="number"
      step={1}
      value={number}
      on:change={handleNumberChange}
    />
    <TuiLabeledInput
      id="password-input"
      label="Password...: "
      type="password"
      value={text}
      on:change={handleChange}
    />
    <TuiLabeledInput 
      id="color-input"
      label="Color......: "
      type="color"
      value={color}
      on:change={handleColorChange}
    />
    <TuiLabeledSelect
      id="select"
      label="Select.....: "
    >
      <TuiOption>First</TuiOption>
      <TuiOption>Second</TuiOption>
      <TuiOption>Third</TuiOption>
      <TuiOptgroup label="Group">
        <TuiOption>First</TuiOption>
        <TuiOption>Second</TuiOption>
        <TuiOption>Third</TuiOption>
      </TuiOptgroup>
    </TuiLabeledSelect>
    <TuiLabeledInput
      id="date-input"
      label="Date.......: "
      type="date"
      value="2019-01-01"
    />
    <TuiLabeledInput 
      id="datetime-local-input"
      label="Time.......: "
      type="datetime-local"
      value="2019-01-01T12:00"
    />
    <TuiCheckboxSet
      heading="Checkboxes"
      description="Add some biz"
      options={[
        { value: 1, label: "First" },
        { value: 2, label: "Second" },
        { value: 3, label: "Disabled", disabled: true },
      ]}
      on:change={({ detail }) => handleCheckboxChange(detail.values)}
      values={ checkboxVals }
    />
    <TuiRadioSet
      heading="Radios"
      options={[
        { value: 1, label: "First" },
        { value: 2, label: "Second" },
        { value: 3, label: "Disabled", disabled: true },
      ]}
      on:change={({ detail }) => { handleRadioChange(+detail.value)}}
      value={ radioVal }
    />
    <TuiLabeledTextarea
      id="textarea"
      label="Textarea"
      value={"asdadasdasd"}
      style={{ width: "100%" }}
    />
    <TuiLabeledTextarea
      id="disabled-textarea"
      label="Disabled Textarea"
      value={"disabled"}
      disabled
      style={{ width: "100%" }}
    />
    <br />
    <TuiLabeledSelect
      id="multi-select"
      label="Multiple"
      multiple
      style={{ width: "100%" }}
    >
      <TuiOption>---</TuiOption>
      <TuiOption>First</TuiOption>
      <TuiOption>Second</TuiOption>
      <TuiOption>Third</TuiOption>
      <TuiOptgroup label="Group">
        <TuiOption>First</TuiOption>
        <TuiOption>Second</TuiOption>
        <TuiOption>Third</TuiOption>
      </TuiOptgroup>

    </TuiLabeledSelect>
    <TuiLabeledInput
      id="file-input"
      label="File"
      class="full-width"
      type="file"
    />
  </TuiForm>
</div>` } />