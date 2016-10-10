<template>
  <Display></Display>
  <Increment></Increment>
</template>
<script>
  import Vue from 'vue';
  import Display from '../components/Display.vue'
  import Increment from '../components/Increment.vue'
  import store from '../vuex/store';

  module.exports = {
    el: 'app',
    components: {
      Display,
      Increment
    },
    store
  };
</script>