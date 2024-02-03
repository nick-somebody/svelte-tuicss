<script lang="ts">
    import type { ComponentType, SvelteComponent } from "svelte";

  const keyListener = () => {}
  const setActiveTab = (name: string) => {
    activeTab = name;
  }

  type Tab = {
    tabName: string;
    tabTitle: string;
    tabPanel: ComponentType<SvelteComponent>;
  }

  export let tabs: Tab[] = []

  let activeTab = tabs[0].tabName;
</script>


<div { ...$$restProps }>
  <div class="tui-tabs">
    <ul role="tablist" on:keydown={keyListener}>
      {#each tabs as { tabName, tabTitle}, idx (`tab-head-${idx}`)}
      <li>
        <button
          role="tab"
          class:tui-tab={true}
          class:active={tabName === activeTab}
          id={ `tab-${tabName}` }
          aria-controls={ `tabpanel-${tabName}` }
          on:click={ () => { setActiveTab(tabName) } }
          aria-selected={ tabName === activeTab }
          data-tab-content={ `tabpanel-${tabName}` }
          tabIndex={ tabName === activeTab ? 0 : -1 }
        >{ tabTitle }</button>
      </li>
      {/each}
    </ul>
  </div>
  {#each tabs as { tabName, tabPanel }, idx (`tab-pane-${idx}`)}
    <div
      role="tabpanel"
      id={ `tabpanel-${tabName}` }
      class="tui-tab-content"
      style:display={ tabName === activeTab ? "block" : "none" }
      aria-labelledby={ `tab-${tabName}` }
      tabIndex={ 0 }
      hidden={ tabName !== activeTab }
    >
    <svelte:component this={tabPanel} />
  </div>
  {/each}
</div>

<style scoped>
button.tui-tab {
  border: none;
}
button.tui-tab:not(.active) {
  background-color: unset;
}
</style>