module.exports.getConfigPath = () => {
    switch (process.env.ENV) {
        case 'prod':
            return './config/prod.js'
        case 'stage':
            return './config/prod.js'
        default:
            return './config/dev.js'
    }
}