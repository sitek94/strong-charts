<script context="module">
  import { getExercise } from '$lib/store'

  export async function load({ params }) {
    return {
      props: {
        exercise: getExercise(params.slug),
      },
    }
  }
</script>

<script lang="ts">
  export let exercise
</script>

<h1>
  {exercise.name}
</h1>
