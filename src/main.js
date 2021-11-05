module.exports = (vemto) => {

    return {

        canInstall() {
            return true
        },

        onInstall() {
            vemto.savePluginData({
                beforeGenerationCommands: [],
                afterGenerationCommands: []
            })
        },

        beforeCodeGenerationStart() {
            let data = vemto.getPluginData()

            data.beforeGenerationCommands.forEach(command => {
                if(command.length) vemto.executeCommand(command)
            })
        },

        beforeCodeGenerationEnd() {
            let data = vemto.getPluginData()

            data.afterGenerationCommands.forEach(command => {
                if(command.length) vemto.executeCommand(command)
            })
        },

    }

}