<script lang="ts">
  import { dateString } from "../helpers";

  export let formatString: string;

  let date: string = dateString(formatString);

  setInterval(() => {
    date = dateString(formatString);
  }, 1000)

</script>


<span data-testid="tui-datetime" class="tui-datetime">{date}</span>

<style>
span.tui-datetime {
  justify-self: end;
}
</style>