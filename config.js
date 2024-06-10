module.exports = {
    jwt: {
        secret: "SECRET-KEY",
        options: {
            algorithm: "HS256",
            expiresIn: "1d",
        }
    }
}