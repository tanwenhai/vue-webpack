<template>
  <button v-on:click="desrease">Decrease -1</button>
</template>

<script>
  import {desrease} from '../vuex/actions';

  export default {
    methods: {
      desrease
    }
  };
  /*export default {
    vuex: {
      actions: {
        desrease
      }
    }
  };*/
</script>