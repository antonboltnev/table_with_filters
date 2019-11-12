<template>
    <div class="flight-info">
        <flight-info-table />
    </div>
</template>
<script>
import flightInfoTable from './flight-info-table'

export default {
    name: 'flight-info',
    components: {
        flightInfoTable
    }
}
</script>

<style lang="scss">
    .flight-info {
        margin: $padding*3 auto;
        padding: $padding $padding*2;
        border-radius: $border-radius*2;
        max-width: 990px;
    }
</style>
