<template>
  <div>
    <div class="nav-sidebar" :style="{ left : paddingSidebar + 'px' }">
        <div class="nav-sidebar-inner-scroll">
            <ul class="sidebar-top-level-items">
                <li @click="ActiveLink('dashboard')" :class="{ navSidebarActive : isActive === 'dashboard'}">
                    <router-link to="/"><i class="fas fa-chart-line"><span class="LinkSidebar" :class="{ linkActive : isActive === 'dashboard' }">Dashboard</span></i></router-link>
                </li>
                <li @click="ActiveLink('pos')" :class="{ navSidebarActive : isActive === 'pos'}">
                    <router-link to="pos"><i class="fas fa-cash-register"><span class="LinkSidebar">POS</span></i></router-link>
                </li>
                <!-- <li>
                    <router-link to="dashboard/1">Unit</router-link>
                </li> -->
                <li @click="ActiveLink('listgoods')" :class="{ navSidebarActive : isActive === 'listgoods'}">
                    <router-link to="listgoods" @click="ActiveLink('listgoods')"><i class="fas fa-cubes"><span class="LinkSidebar">Goods</span></i></router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="content-wrapper">
      <div class="mobile-overlay" :class="{ mobileNavOpen : isSideBar }" @click="closeSideBar(true)"></div>
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
      isSideBar: false,
      paddingSidebar: '',
      windowWidth: 0
    }
  },
  watch: {
    windowWidth (newWidth, oldWidth) {
      if (newWidth <= 768) {
        this.paddingSidebar = -220
      } else {
        this.paddingSidebar = 0
      }
      this.isSideBar = false
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    })
  },
  methods: {
    ActiveLink: function (urlRouter) {
      this.isActive = urlRouter
    },
    openSideBar: function (e) {
      if (e) {
        this.paddingSidebar = 0
        this.isSideBar = true
      }
    },
    closeSideBar: function (e) {
      if (e) {
        this.paddingSidebar = -220
        this.isSideBar = false
      }
    }
  }
}
</script>
