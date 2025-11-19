const { config } = require("dotenv");

config()

module.exports = {
    MONGO_URI : process.env.MONGO_URI , 
    port : process.env.PORT
}