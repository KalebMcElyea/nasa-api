<template class="image">
<div class="app">
  <header class="container-fluid">
    <div class="row">
      <div class="col text-center m-2">
        <h2>Roving Around Mars</h2>
      </div>
    </div>
  </header>
  <main>
  <img alt="Vue logo" src="https://i.pinimg.com/originals/6f/8c/da/6f8cda99bb66d88fd6d666fb025a0817.gif" class="mb-4">
  <MarsPhotos />
  <iframe class="marsPic mt-3" :src="state.mars.url"></iframe>
  <h5 class="m-3 border border-dark">{{state.mars.explanation}}</h5>
  </main>
  <footer class="container-fluid">
    <div class="row">
      <div class="col text-center">
          <p>Made by Kaleb McElyea</p>
      </div>
    </div>
  </footer>
</div>

</template>

<script>
import { AppState } from './AppState'
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import MarsPhotos from './components/MarsPhotos'

export default {
  name: 'App',
  setup () {
    const state = reactive({
      query: '',
      mars: computed(() => AppState.mars)
    })
    return {
      state
    }
  },
  components: {
    MarsPhotos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.marsPic{
  height: 500px;
  width: 2000px
}

main {
  flex-grow: 1
}

</style>
