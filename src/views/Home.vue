<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
    <Welcome msg="fuck you"/>
  </div>




  
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
  }
}
</script>

<style lang="scss" scoped>

</style>
