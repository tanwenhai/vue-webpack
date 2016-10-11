<template>
  <button v-on:click="desrease">Decrease -1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions(['desrease'])
}
  /*export default {
    vuex: {
      actions: {
        desrease
      }
    }
  };*/
</script>