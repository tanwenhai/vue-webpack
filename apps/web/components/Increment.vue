<template>
  <div>
    <button v-on:click='increment'>Increment +1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions({
    increment: 'incrementCounter'
  })
}
/*export default {
  vuex: {
    actions: {
      increment: incrementCounter
    }
  }
}*/
</script>