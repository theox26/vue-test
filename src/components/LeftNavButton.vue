<template>
  <font-awesome-layers class="left-nav-button">
    <font-awesome-icon
      :icon="['far', 'circle']"
      transform="grow-8"
      style="color: #FEC010;"
      v-show="isSelected"
    />
    <font-awesome-icon icon="circle" transform="shrink-7" :mask="['fas', 'circle']" />
  </font-awesome-layers>
</template>

<script>
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';

export default {
  name: 'LeftNavButton',
  components: {
    FontAwesomeIcon,
    FontAwesomeLayers,
  },
  props: {
    selected: Boolean,
  },
  computed: {
    isSelected() {
      return this.selected;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
