<template>
  <div>
    <h3>Count is {{ counterValue }}</h3>
  </div>
</template>

<script>
import { getCount } from '../vuex/getters';
import { mapState } from 'vuex';

export default {
  computed: mapState({
    counterValue: getCount
  })
}
/*
export default {
  vuex: {
    getters: {
      counterValue: getCount
    }
  }
}*/
</script>