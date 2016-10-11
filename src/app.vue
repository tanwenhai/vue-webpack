<template>
  <Display></Display>
  <Increment></Increment>
  <Decrease></Decrease>
</template>
<script>
  import Vue from 'vue';
  import Display from '../components/Display.vue';
  import Increment from '../components/Increment.vue';
  import Decrease from '../components/Decrease.vue';
  import store from '../vuex/store';

  module.exports = {
    el: 'app',
    components: {
      Display,
      Increment,
      Decrease
    },
    store
  };
</script>