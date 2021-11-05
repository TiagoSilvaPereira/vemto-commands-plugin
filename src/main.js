module.exports = (vemto) => {

    return {

        canInstall() {
            return true
        },

        onInstall() {
            vemto.savePluginData({
                text: 'Hello world!!'
            })
        },

        beforeCodeGenerationStart() {
            let data = vemto.getPluginData()

            vemto.log.info(data.text)
            vemto.log.warning(`That's awesome!!! A Vemto plugin showing a message during code generation`)
        },

    }

}