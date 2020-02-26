const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bcae2f0490ae6dba0a757e4434438d78&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}