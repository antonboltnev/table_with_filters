<template>
    <div class="flight-table-row">
        <div class="row__cell">
            {{row_data.time}}
        </div>
        <div class="row__cell">
            {{row_data.cityFrom + '&nbsp;-&nbsp;' + row_data.cityTo}}
        </div>
        <div class="row__cell">
            {{row_data.flightNum}}
        </div>
        <div class="row__cell">
            {{row_data.status}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'flight-table-row',
    props: {
        row_data: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="scss">
    .flight-table-row {
        display: flex;
        justify-content: space-between;
        padding: $padding;
        margin-bottom: $padding;
        border: solid 1px #e4e4e4;
        border-radius: $border-radius;
        background: $light-white-bg;
        &:hover {
            background: $light-yellow-bg;
        }
        .row {
            &__cell {
            flex: 1 1 20%;
            text-align: center
        }
        }
    }
</style>