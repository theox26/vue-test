<template>
  <div @click="setSelection" class="nav-button-outer">
    <font-awesome-layers class="left-nav-button">
      <font-awesome-icon
        :icon="['far', 'circle']"
        transform="grow-8"
        style="color: #FEC010;"
        v-show="isActive"
      />
      <font-awesome-icon icon="circle" transform="shrink-7" :mask="['fas', 'circle']" />
    </font-awesome-layers>
  </div>
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
    index: {
      type: String,
      required: true
    },
    route: [String, Object],
    active: Boolean,
  },
  computed: {
    isActive() {
      return this.index === this.navMenu.activeIndex;
    },
  },
  methods: {
    setSelection(){
      this.dispatch('LeftNavMenu', 'item-click', this);
      this.$emit('click', this);
    },
  },
  mounted() {
    this.rootMenu.addItem(this);
  },
  beforeDestroy() {
    this.rootMenu.removeItem(this);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
