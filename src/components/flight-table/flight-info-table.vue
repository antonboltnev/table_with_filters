<template>
    <div class="flight-info-table">
        <div class="table__options">
            <div class="option__search__field">
                <input 
                    type="text" 
                    placeholder="Поиск рейса" 
                    v-model='searchFiledValue'
                    @input="searchFlight(flightSelectedOption, searchFiledValue)"
                />
            </div>
            <div class="option__dropdown">
                <select v-model='flightSelectedOption' @change="setFlightSelectOption(flightSelectedOption, searchFiledValue)">
                    <option :value="option.value"
                        v-for='option in table_flights_options'
                        :key='option.value'
                    >{{option.text}}
                    </option>
                </select>
            </div>
        </div>
        <div class="table__header">
            <div class="header__item">Время</div>
            <div class="header__item">Откуда / Куда</div>
            <div class="header__item">Рейс №</div>
            <div class="header__item">Статус</div>
        </div>
        <flight-table-row 
            v-for='flight in FLIGHTS'
            :row_data='flight'
            :key='flight.flightNum'
        />
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import flightTableRow from './flight-table-row'
export default {
    name: 'flight-info-table',
    components: {
        flightTableRow
    },
    data : () => {
        return {
            searchFiledValue: '',
            flightSelectedOption: 'all',
            table_flights_options: [
                { value: 'all', text: 'Все рейсы' },
                { value: 'take_off', text: 'Вылетающие' },
                { value: 'arriving', text: 'Прилетающие' },
                { value: 'delay', text: 'Задержанные' },
            ]
        }
    },
    computed: {
        ...mapGetters([
            'FLIGHTS'
        ])
    },
    methods: {
        ...mapActions([
            'GET_FLIGHTS_FROM_API',
            'GET_FLIGHTS_BY_SEARCH_RESULTS'
        ]),
        setFlightSelectOption(flightStatus, searchResult) {
            this.flightSelectedOption = flightStatus;
            this.GET_FLIGHTS_FROM_API({'flightStatus': flightStatus, 'searchResult':searchResult});
        },
        searchFlight(flightStatus, searchResult) {
            this.GET_FLIGHTS_FROM_API({flightStatus, searchResult});
        }
    },
    created() {
        this.GET_FLIGHTS_FROM_API({'flightStatus': this.flightSelectedOption, 'searchResult':this.searchFiledValue});
    }
}
</script>

<style lang="scss">
    .flight-info-table {
        margin: $padding*3 auto;
        padding: $padding;
        background: $light-grey-bg;
        border-radius: $border-radius*2;
        box-shadow: 0 0 20px 0px #949494;
        & .table__header {
            display: flex;
            justify-content: space-between;
            padding: $padding;
        }
        & .table__options {
            display: flex;
        }
        .option {
            &__search__field {
                margin-right: $padding;
                & input {
                    border: solid 1px #e4e4e4;
                    padding: $padding/2;
                    border-radius: $border-radius;
                    outline: none;
                }
            }
            &__dropdown select {
                    border: solid 1px #e4e4e4;
                    padding: $padding/2;
                    border-radius: $border-radius;
                    outline: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    -o-appearance: none;
                    appearance: none;
                    background: $light-white-bg;
            }
        }
        .header {
            &__item {
                flex: 1 1 20%;
                text-align: center;
            }
        }
    }
</style>
