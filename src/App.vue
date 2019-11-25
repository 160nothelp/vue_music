<template>
  <div id="app" class="wrapper">
    <Aheader></Aheader>
    <Amenu></Amenu>
    <Acontent></Acontent>
    <Afooter></Afooter>
  </div>
</template>

<script>
import Aheader from './components/adminlte_header'
import Amenu from './components/adminlte_menu'
import Afooter from './components/adminlte_footer'
import Acontent from './components/adminlte_content'
export default {
  name: 'App',
  components:{
      Aheader,
      Amenu,
      Afooter,
      Acontent
  }
}
</script>

<style>

</style>
