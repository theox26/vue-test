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
        //this.initOpenedMenu();
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
      const { index, indexPath } = item;
      const oldActiveIndex = this.activeIndex;

      this.activeIndex = item.index;
      this.$emit('select', index, indexPath, item);

      if (this.router) {
        this.routeToItem(item, (error) => {
          this.activeIndex = oldActiveIndex;
          if (error) console.error(error);
        });
      }
    },
    routeToItem(item, onError) {
      const route = item.route || item.index;
      try {
        this.$router.push(route, () => {}, onError);
      } catch (e) {
        console.error(e);
      }
    },
  },
  mounted() {
    this.initOpenedMenu();
    this.$on('item-click', this.handleItemClick);
    this.$watch('items', this.updateActiveIndex);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
