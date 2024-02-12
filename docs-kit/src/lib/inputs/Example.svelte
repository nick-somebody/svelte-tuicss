<script lang="ts">
  import {
    TuiOptgroup,
    TuiOption,
    TuiCheckboxSet,
    TuiForm,
    TuiLabeledInput,
    TuiLabeledSelect,
    TuiLabeledTextarea,
    TuiRadioSet
  } from "svelte-tuicss";

  let text: string | undefined;
  let number: number | undefined;
  let color: string = "#00FF00";
  let checkboxVals: number[] = []
  let radioVal: number = 1;

</script>
<TuiForm
  heading="Form"
>
  <TuiLabeledInput
    id="input"
    label="Text.......: "
    bind:value={text}
  />
  <TuiLabeledInput
    id="disabled-input"
    label="Disabled...: "
    bind:value={text}
    disabled
  />
  <TuiLabeledInput
    id="number-input"
    label="Number.....: "
    type="number"
    step={1}
    bind:value={number}
  />
  <TuiLabeledInput
    id="password-input"
    label="Password...: "
    type="password"
    bind:value={text}
  />
  <TuiLabeledInput 
    id="color-input"
    label="Color......: "
    type="color"
    bind:value={color}
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
      { value: 4, label: "Fourth" },
    ]}
    bind:group={ checkboxVals }
  />
  <TuiRadioSet
    heading="Radios"
    description="Add some biz"
    options={[
      { value: 1, label: "First" },
      { value: 2, label: "Second" },
      { value: 3, label: "Disabled", disabled: true },
    ]}
    bind:selected={ radioVal }
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