<template>
  <header class="main-header">
    <a href="#" class="logo">
      <span class="logo-mini"><b>O</b></span>
      <span class="logo-lg"><b>OPS&nbsp;&nbsp;</b></span>
    </a>
    <nav class="navbar navbar-static-top">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="static/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs" id="username"></span>
            </a>
            <ul class="dropdown-menu">
              <li class="user-header">
                <img src="static/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                <p id="username1">
                </p>
              </li>
              <li class="user-footer">
                <div class="pull-left">
                  <a  class="btn btn-default btn-flat" data-toggle="modal" data-target="#ChangePasswd">修改密码</a>
                </div>
                <div class="pull-right">
                  <a  class="btn btn-default btn-flat">登出</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "adminlte_header"
    }
</script>

<style scoped>

</style>
