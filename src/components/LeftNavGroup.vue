<template>
  <div class="left-nav-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LeftNavMenu',
  provide() {
    return {
      navMenu: this,
    };
  },
  props: {
    defaultActive: {
      type: String,
      default: '1',
    },
    router: Boolean,
  },
  data() {
    return {
      activeIndex: this.defaultActive,
      items: {},
    };
  },
  watch: {
    defaultActive: 'updateActiveIndex',
  },
  methods: {
    updateActiveIndex() {
      const item = this.items[this.defaultActive];
      if (item) {
        this.activeIndex = item.index;
      } else {
        this.activeIndex = null;
      }
    },
    addItem(item) {
      this.$set(this.items, item.index, item);
    },
    removeItem(item) {
      delete this.items[item.index];
    },
    handleItemClick(item) {
      const oldActiveIndex = this.activeIndex;

      this.activeIndex = item.index;

      if (this.router) {
        this.routeToItem(item, (error) => {
          this.activeIndex = oldActiveIndex;
          // eslint-disable-next-line
          if (error) console.error(error);
        });
      }
    },
    routeToItem(item, onError) {
      const route = item.route || item.index;
      try {
        this.$router.push(route, () => {}, onError);
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
      }
    },
  },
  mounted() {
    this.$on('item-click', this.handleItemClick);
    this.$watch('items', this.updateActiveIndex);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
