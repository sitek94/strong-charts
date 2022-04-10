<script lang="ts">
  import { base } from '$app/paths'

  export let to: string
</script>

<a href="{base}/{to}">
  <slot />
</a>
