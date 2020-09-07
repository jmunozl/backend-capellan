require('dotenv').config({path:'.env'})
const config = {
  appConfig: {
    port: process.env.PORT || 4000
  },
  dbConfig: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/tallercapellan'
  }
}

module.exports = config
