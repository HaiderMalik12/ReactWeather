import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9498012f274c5c05516b20f96f05f0cd&units=imperial';
module.exports= {
    getTemp: function (location) {
        let encodedLocation = encodeURIComponent(location);
        const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(res => {
            debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }

        }).catch(err=> {
            throw new Error(err);
        })
    },
    getAccounts: function () {

        return axios.get('http://localhost:1337/category').then(results =>{
            return results.data;
        }).catch(err =>{
            throw new Error(err);
        });

    }
}