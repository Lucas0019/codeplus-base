const menu = require('../modules/menu')

const Default = {
    init: function () {
        //console.log('Olha o Coffe ☕')
    },

    menuInit: () => {
        const menuConfig = {
            tree: 3
        }

        menu(menuConfig)
    }
}

module.exports = Default

