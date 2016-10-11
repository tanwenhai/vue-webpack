<template>
  <div>
    <button v-on:click='increment'>Increment +1</button>
  </div>
</template>

<script>
import { incrementCounter } from '../vuex/actions';

export default {
  methods: {
    increment: incrementCounter
  }
}
/*export default {
  vuex: {
    actions: {
      increment: incrementCounter
    }
  }
}*/
</script>