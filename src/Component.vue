<template>
    <div class="w-full">
        <div class="flex flex-col p-4">
            <h4 class="mb-4">Commands to execute before the code generation:</h4>

            <div class="flex mb-2" v-for="(command, index) in pluginData.beforeGenerationCommands" :key="index"> 
                <input class="input" type="input" v-model="pluginData.beforeGenerationCommands[index]" @input="saveDebounced">
                <button class="button-danger ml-2" @click="removeCommandFrom('beforeGenerationCommands', index)">Remove</button>
            </div>

            <div>
                <button class="button-primary" @click="addEmptyCommandTo('beforeGenerationCommands')">Add Command</button>
            </div>
        </div>

        <hr>

        <div class="flex flex-col p-4">
            <h4 class="mb-4">Commands to execute after the code generation:</h4>

            <div class="flex mb-2" v-for="(command, index) in pluginData.afterGenerationCommands" :key="index"> 
                <input class="input" type="input" v-model="pluginData.afterGenerationCommands[index]" @input="saveDebounced">
                <button class="button-danger ml-2" @click="removeCommandFrom('afterGenerationCommands', index)">Remove</button>
            </div>

            <div>
                <button class="button-primary" @click="addEmptyCommandTo('afterGenerationCommands')">Add Command</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pluginData: {}
        }
    },

    created() {
        this.pluginData = window.vemtoApi.getPluginData()
    },

    methods: {
        addEmptyCommandTo(commandsListName) {
            this.pluginData[commandsListName].push('')

            this.save()
        },

        removeCommandFrom(commandsListName, index) {
            this.pluginData[commandsListName].splice(index, 1)

            this.save()
        },

        saveDebounced: window.vemtoApi.debounce(function() {
            this.save()
        }, 500),

        save() {
            window.vemtoApi.savePluginData(this.pluginData)
        }
    }
}
</script>