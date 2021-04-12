<template>
  <div class="place">
    
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
