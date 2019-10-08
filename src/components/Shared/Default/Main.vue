<template>
  <div>
    <div class="nav-sidebar" :style="{ left : isSideBar + 'px' }">
        <div class="nav-sidebar-inner-scroll">
            <ul class="sidebar-top-level-items">
                <li @click="ActiveLink('dashboard')" :class="{ navSidebarActive : isActive === 'dashboard'}">
                    <router-link to="/">Dashboard</router-link>
                </li>
                <li @click="ActiveLink('pos')" :class="{ navSidebarActive : isActive === 'pos'}">
                    <router-link to="pos">POS</router-link>
                </li>
                <!-- <li>
                    <router-link to="dashboard/1">Unit</router-link>
                </li> -->
                <li @click="ActiveLink('listgoods')" :class="{ navSidebarActive : isActive === 'listgoods'}">
                    <router-link to="listgoods" @click="ActiveLink('listgoods')">Goods</router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="content-wrapper">
      <div class="mobile-overlay"></div>
        <div class="container-fluid">
            <div class='block-menu'>
              <div class='row'>
                  <div class="col-md-12 col-lg-6 d-flex">
                      <button name="button" type="button" class="toggle-mobile-nav" @click="openSideBar(true)"><span class="sr-only">Open sidebar</span>
                          <i aria-hidden="true" data-hidden="true" class="fa fa-bars"></i>
                      </button>
                  </div>
                  <div class="col-md-12 col-lg-6 d-inline-flex flex-wrap justify-content-lg-end" id='menuRight'>
                  </div>
              </div>
            </div>
        </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'leftmenu',
  data () {
    return {
      isActive: 'dashboard',
      isSideBar: ''
    }
  },
  methods: {
    ActiveLink: function (urlRouter) {
      this.isActive = urlRouter
    },
    openSideBar: function (e) {
      if (e) {
        this.isSideBar = 0
      }
    }
  }
}
</script>
