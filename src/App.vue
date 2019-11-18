<template>
  <div id="app">
    <Header />
      <div class="layout-page page-with-contextual-sidebar">
        <Main />
      </div>
      <ManageDocModal />
  </div>
</template>

<script>
import Header from '@/components/Shared/Default/Header'
import Main from '@/components/Shared/Default/Main'
import ManageDocModal from '@/components/Shared/Modal/ManageDocModal'
import Alert from '@/components/Shared/Modal/Alert'
import appMixins from '@/Mixins/appMixins'
import {store} from '@/store/'
export default {
  name: 'App',
  mixins: [appMixins],
  store,
  components: {
    Header,
    Main,
    ManageDocModal,
    Alert
  }
}
</script>

<style>
@import './assets/styles/design.css';
@import './assets/styles/site.css';
@import './assets/styles/mediaControl.css';

#app {
  font-family: 'Raleway', sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
