require('dotenv/config')

module.exports = {
    database: {
        mysql:{
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME        
        }
    },
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_KEY,
    headerSecret: process.env.HEADERS_SECRET
}