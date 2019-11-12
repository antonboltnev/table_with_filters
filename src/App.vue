<template>
  <div id="app">
    <flight-info /> 
  </div>
</template>

<script>
import flightInfo from './components/flight-table/flight-info'
export default {
  name: 'app',
  components: {
    flightInfo
  }
}
</script>

<style lang="scss">
div {
  font-size: $main-font-size;
}
</style>
