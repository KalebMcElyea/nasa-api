<template>
  <div class="mars-results border border-dark">
</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'

import { marsService } from '../services/MarsService'

export default {
  name: 'MarsPhotos',
  props: {
    mars: Object
  },
  setup (props) {
    onMounted(() => {
      marsService.searchMars()
    })
    return {
      async getPhotos () {}
      // setActiveMarsImg () {
      //   marsService.setActive(props.marsimage)
      // }
    }
  },
  components: {}
}
</script>

<style scoped>

</style>
