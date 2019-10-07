<template>
  <div id="app">
    <Header />
      <div class="layout-page page-with-contextual-sidebar">
        <LeftMenu />
        <div class="content-wrapper">
            <div class="mobile-overlay"></div>
            <div class="container-fluid">
                <div class='block-menu'>
                </div>
            </div>
            <router-view></router-view>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Shared/Default/Header'
import LeftMenu from '@/components/Shared/Default/LeftMenu'
export default {
  name: 'App',
  components: {
    Header,
    LeftMenu
  }
}
</script>

<style>
@import './assets/styles/design.css';
@import './assets/styles/site.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
