<script lang="ts">
  export let status: 'success' | 'error'
  export let message: string
</script>

<div role="alert" class={status}>
  {message}
</div>

<style>
  div {
    padding: 1rem;
    border: 1px solid var(--color);
    border-radius: 0.25rem;
    color: var(--color);
    background-color: var(--bg-color);
  }

  .success {
    --color: green;
    --bg-color: #dff0d8;
  }

  .error {
    --color: red;
    --bg-color: #f2dede;
  }
</style>
