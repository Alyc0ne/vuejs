<template>
    <div class="nav-sidebar">
        <div class="nav-sidebar-inner-scroll">
            <ul class="sidebar-top-level-items">
                <li>
                    <router-link to="dashboard">Dashboard</router-link>
                </li>
                <li>
                    <router-link to="pos">POS</router-link>
                </li>
                <!-- <li>
                    <router-link to="dashboard/1">Unit</router-link>
                </li> -->
                <li>
                    <router-link to="listgoods">Goods</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'leftmenu'
}
</script>
