import axios from 'axios'

export default {
    GET_FLIGHTS_FROM_API: ({ commit }, { flightStatus, searchResult}) => {
        return axios('http://localhost:3000/flights', {
            withCredentials: true,
            method: "GET"
        })
            .then((response) => {
                let flights = [];
                if (searchResult.length > 0 && flightStatus !== 'all') {
                    response.data.map(function (item) {
                        if (item.status === flightStatus && item.flightNum.toLowerCase().includes(searchResult)) {
                            flights.push(item);
                            commit('SET_FLIGHTS_FROM_API', flights)
                        }
                    })
                } else if (flightStatus !== 'all') {
                    response.data.map(function (item) {
                        if (item.status === flightStatus) {
                            flights.push(item);
                            commit('SET_FLIGHTS_FROM_API', flights)
                        }
                    })
                } else if (searchResult.length > 1) {
                    response.data.map(function (item) {
                        if (item.flightNum.toLowerCase().includes(searchResult)) {
                            flights.push(item);
                            commit('SET_FLIGHTS_FROM_API', flights)
                        }
                    })
                } else {
                    commit('SET_FLIGHTS_FROM_API', response.data)
                }
        })
    }
}