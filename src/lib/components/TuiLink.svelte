<script lang="ts">
  let href: string;
</script>

<a class:tui-link={true} {href} { ...$$restProps }><slot></slot></a>

<style scoped>
a.tui-link {
  text-decoration: underline;
  cursor: pointer;
}
a.tui-link:hover {
  color: rgb(150,180,255);
}
</style>