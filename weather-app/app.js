const dotenv = require('dotenv')
const axios = require('axios')

dotenv.config()

async function getLocation() {
  try {
    const response = await axios.get(`https://ipinfo.io?token=${process.env.IPINFO_API_KEY}`)
    return response.data.loc
  } catch (error) {
    console.log('Unable to find your location!')
  }
}

async function getWeather() {
  const loc = await getLocation()
  try {
    const response = await axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${loc}`)
    console.log(response.data.currently)
  } catch(error) {
    console.log('Unable to connect to weather!')
  }
}

getWeather()