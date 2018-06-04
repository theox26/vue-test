<template>
  <div class="hello">
    <mdc-headline>{{ msg }}</mdc-headline>
    <mdc-title>Essential Links</mdc-title>
    <ul>
      <li>
        <mdc-button
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </mdc-button>
      </li>
      <li>
        <mdc-button
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </mdc-button>
      </li>
      <li>
        <mdc-button
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </mdc-button>
      </li>
      <li>
        <mdc-button
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </mdc-button>
      </li>
      <br>
      <li>
        <mdc-button
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </mdc-button>
      </li>
    </ul>
    <mdc-title>Ecosystem</mdc-title>
    <ul>
      <li>
        <mdc-button
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </mdc-button>
      </li>
      <li>
        <mdc-button
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </mdc-button>
      </li>
      <li>
        <mdc-button
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </mdc-button>
      </li>
      <li>
        <mdc-button
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </mdc-button>
      </li>
    </ul>
  </div>
</template>

<script>
import VueMDCTypography from 'vue-mdc-adapter/dist/typography'
import VueMDCButton from 'vue-mdc-adapter/dist/button'

export default {
  name: 'HelloWorld',
  mixins: [VueMDCTypography, VueMDCButton],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
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
