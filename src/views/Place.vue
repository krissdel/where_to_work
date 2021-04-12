<template>
  <div class="place">
    <!-- <h1>page 2</h1> -->
    
    <Localisation /> 

  </div>
</template>


<script>
// @ is an alias to /src
import Localisation from '@/components/Localisation.vue'

export default {
  name: 'Place',
  components: {
    Localisation,
  }
}
</script>

<style lang="scss" scoped>

</style>
