<script>
  import { TuiChart, TuiDivider } from "svelte-tuicss";
</script>

<div style:padding={"14px"}>
  <TuiChart
    size={ { width: "500px", height: "300px" } }
    values={[
      {value: 80, label: "s1" },
      {value: 30, label: "s2" },
      {value: 50, label: "s3" },
      {value: 90, label: "s4" },
      {value: 60, label: "s5" },
      {value: 100, label: "s6" },
      {value: 10, label: "s7" },
      {value: 75, label: "s8" },
    ]}
    labels={[
      "20%",
      "40%",
      "60%",
      "80%",
      "100%",
    ]}
  />
  <TuiDivider />
  <TuiChart horizontal
    size={ { width: "500px", height: "200px" } }
    values={[
      {value: 80, label: "2018" },
      {value: 60, label: "2019" },
      {value: 100, label: "2020" },
    ]}
    labels={[
      "25%",
      "50%",
      "75%",
      "100%",
    ]}
  />
</div>