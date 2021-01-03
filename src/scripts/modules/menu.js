//Modulo de criação de menus
const api = require('./api')

const menu = (tree) => {
    const config = {
        method: 'GET',
        url: `/api/catalog_system/pub/category/tree/${Object.tree}`
    }

    const callbackMenu = (data) => {

    }

    api(config, callbackMenu)
}


module.exports = menu;