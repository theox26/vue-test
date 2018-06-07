<template>
  <div id="app">
    <el-container>
      <el-aside width="3rem" class="main-left-bar">
        <div class="hamburger-box" @click="viewMenu = !viewMenu">
          <font-awesome-icon icon="bars" size="lg" />
        </div>
        <left-nav-button />
        <left-nav-button selected="true" />
      </el-aside>
      <transition name="fade" mode="out-in" appear>
        <el-aside width="200px" v-show="viewMenu" class="nav-menu-vertical">
          <el-menu
            default-active="2"
            class="nav-menu-vertical"
            @open="handleOpen"
            @close="handleClose"
            background-color="#383d42"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
      </transition>
      <el-container>
        <el-header
          class="page-header"
          height="3rem"
        >
          <div class="header-left header">
            <div>
              Page Title
            </div>
          </div>
          <div class="header-right header">
            <div>
              Hello, FirstName LastName
              <span>
                <font-awesome-icon icon="caret-down" />
              </span>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
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
