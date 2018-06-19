<template>
  <el-tooltip class="tooltip" effect="dark" :content="route" placement="right">
    <div @click="setSelection" class="nav-button-outer">
      <font-awesome-layers class="left-nav-button">
        <font-awesome-icon
          :icon="['far', 'circle']"
          :class="{
            'inactive': !active,
          }"
          transform="grow-8"
          style="color: #FEC010;"
        />
        <font-awesome-icon icon="circle" transform="shrink-7" :mask="['fas', 'circle']" />
      </font-awesome-layers>
    </div>
  </el-tooltip>
</template>

<script>
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import Emitter from '../mixins/emitter';

export default {
  name: 'LeftNavButton',
  inject: ['navMenu'],
  mixins: [Emitter],
  components: {
    FontAwesomeIcon,
    FontAwesomeLayers,
  },
  props: {
    index: {
      type: String,
      required: true,
    },
    route: [String, Object],
  },
  computed: {
    active() {
      return this.index === this.navMenu.activeIndex;
    },
  },
  methods: {
    setSelection() {
      this.navMenu.activeIndex = this.index;
      this.$emit('item-click', this);
      this.$router.push({ name: this.route });
    },
  },
  mounted() {
    this.navMenu.addItem(this);
  },
  beforeDestroy() {
    this.navMenu.removeItem(this);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .is-active {
    display: inline-block;
  }

  .inactive {
    display: none;
  }

  .nav-button-outer {
    cursor: pointer;
  }
</style>
