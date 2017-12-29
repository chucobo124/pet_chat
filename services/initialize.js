module.exports.getConfigPath = () => {
    switch (process.env.ENV) {
        case 'prod':
            return './configs/prod.js'
        case 'stage':
            return './configs/prod.js'
        default:
            return './configs/dev.js'
    }
}