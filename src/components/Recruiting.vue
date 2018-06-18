<template>
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
      <div class="hello">
        <h2>{{ msg }}</h2>
        <h4>Essential Links</h4>
        <ul>
          <li>
            <a
              href="https://vuejs.org"
              target="_blank"
            >
              Core Docs
            </a>
          </li>
          <li>
            <a
              href="https://forum.vuejs.org"
              target="_blank"
            >
              Forum
            </a>
          </li>
          <li>
            <a
              href="https://chat.vuejs.org"
              target="_blank"
            >
              Community Chat
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/vuejs"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <br>
          <li>
            <a
              href="http://vuejs-templates.github.io/webpack/"
              target="_blank"
            >
              Docs for This Template
            </a>
          </li>
        </ul>
        <h4>Ecosystem</h4>
        <ul>
          <li>
            <a
              href="http://router.vuejs.org/"
              target="_blank"
            >
              vue-router
            </a>
          </li>
          <li>
            <a
              href="http://vuex.vuejs.org/"
              target="_blank"
            >
              vuex
            </a>
          </li>
          <li>
            <a
              href="http://vue-loader.vuejs.org/"
              target="_blank"
            >
              vue-loader
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vuejs/awesome-vue"
              target="_blank"
            >
              awesome-vue
            </a>
          </li>
        </ul>
        <el-button
          @click="done"
        >
          <font-awesome-icon :icon="['fas', 'clipboard-check']" />
          Done
        </el-button>
      </div>
      </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'Recruiting',
  methods: {
    done() {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000,
      });
    },
  },
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      msg: 'Welcome to Recruiting 2.0',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
