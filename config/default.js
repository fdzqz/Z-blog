module.exports = {
    port: 3000,
    session: {
        secret: 'z-blog',
        key: 'z-blog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/z-blog'
}
