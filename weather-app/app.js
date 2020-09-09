require('dotenv').config()
const request = require('postman-request')

const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY_API}/37.8267,-122.4233`

request({url}, (error, response) => {
  const data = JSON.parse(response.body)
  console.log('currently', data.currently)
})
