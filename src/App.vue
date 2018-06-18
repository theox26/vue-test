<template>
  <div id="app">
    <el-container>
      <el-aside width="3rem" class="main-left-bar">
        <div class="hamburger-box" @click="viewMenu = !viewMenu">
          <font-awesome-icon icon="bars" size="lg" />
        </div>
        <left-nav-menu>
          <left-nav-button index="1" route="Recruiting" />
          <left-nav-button index="2" route="Staffing" />
        </left-nav-menu>
      </el-aside>
      <router-view/>
    </el-container>
  </div>
</template>

<script>
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import LeftNavMenu from './components/LeftNavGroup.vue';
import LeftNavButton from './components/LeftNavButton.vue';

export default {
  name: 'App',
  data() {
    return {
      viewMenu: false,
    };
  },
  components: {
    FontAwesomeIcon,
    FontAwesomeLayers,
    LeftNavMenu,
    LeftNavButton,
  },
  methods: {
    handleOpen(key, keyPath) {
      // eslint-disable-next-line
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // eslint-disable-next-line
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

aside {
  min-height: 100vh;
}

.hamburger-box {
  height: 3rem;
  width: 100%;
  background-color: #545c64;
  line-height: 3rem;
  margin-bottom: 1.5rem;
}

.nav-menu-vertical {
  background-color: #383d42;
  border-right: none;
}

.page-header {
  box-shadow: 0 2px 5px #ccc;
  position: relative;
  display: flex;

  .header {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.header-left > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    &.header-right > div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
}

.main-left-bar {
  background: #ccc;
  color: #fff;
  width: 3rem;

  .left-nav-button {
    margin: 0 auto 2rem auto;
    display: block;
  }
}
</style>
