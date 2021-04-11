<template>
  <div class="home">
    <Welcome msg=" "/>
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
