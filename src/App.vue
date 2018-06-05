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
        fixed
      >
        <mdc-top-app-bar-action
          @click="showHelp"
          icon="help"
          iconClasses="fa fa-question-circle-o"
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
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

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
