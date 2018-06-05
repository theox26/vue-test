<template>
  <div id="app">
    <mdc-layout-app>
      <mdc-drawer
        slot="drawer"
        toggle-on="toggle-drawer"
        persistent
      >
        <mdc-drawer-list>
          <mdc-drawer-item start-icon="inbox">Inbox</mdc-drawer-item>
          <mdc-drawer-item start-icon="send">Sent Mail</mdc-drawer-item>
          <mdc-drawer-item start-icon="drafts">Drafts</mdc-drawer-item>
        </mdc-drawer-list>
      </mdc-drawer>
      <mdc-top-app-bar
        title="Page Title"
        event="toggle-drawer"
        iconClasses="fas fa-bars"
        fixed
      >
        <mdc-top-app-bar-action
          @click="showHelp"
          iconClasses="far fa-question-circle"
        />
      </mdc-top-app-bar>
      <main class="content" >
        <router-view/>
      </main>
    </mdc-layout-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showHelp() {
      // eslint-disable-next-line
      console.log('show help');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
