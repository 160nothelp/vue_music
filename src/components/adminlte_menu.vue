<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <div class="user-panel">
        <div class="pull-left image">
          <img src="static/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p id="username2"> </p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>

      <ul class="sidebar-menu">
        <li class="header">导航栏</li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-search"></i> <span>Search</span>
            <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                  </span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-laptop"></i> <span>HOST</span>
            <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                  </span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-stripe-s"></i> <span>SLB</span>
            <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                  </span>
          </a>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
    export default {
        name: "adminlte_menu"
    }
</script>

<style scoped>

</style>
