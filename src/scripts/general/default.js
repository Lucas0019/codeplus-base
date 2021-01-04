const menu = require('../modules/menu')

const Default = {
    init: function () {
        Default.menuInit()
    },

    menuInit: () => {
        const menuConfig = {
            tree: 3
        }

        menu(menuConfig)
    }
}

module.exports = Default

