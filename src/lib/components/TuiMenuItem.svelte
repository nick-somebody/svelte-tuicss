<script lang="ts">
  export let type: "button" | "link" | "text" = "button";
  export let href: string = ""
  export let menuitem: boolean = true;
</script>


<li>
  {#if type === "button"}
    <button class:menuitem on:click><slot /></button>
  {/if}
  {#if type === "link"}
    <a {href}><slot /></a>
  {/if}
  {#if type === "text"}
    <div><slot /></div>
  {/if}
</li>

<style scoped>
button.menuitem {
  width: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 0;
  cursor: pointer;
}
</style>