<template>
    <div class="w-full">
        A simple Vemto Plugin base:
        
        <br/>

        <input class="input" type="input" v-model="text">
        
        <br/>
        
        <button class="button-primary" @click="save">Save</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
            pluginData: {},
        }
    },

    created() {
        this.pluginData = window.vemtoApi.getPluginData()
        this.text = this.pluginData.text
    },

    methods: {
        save() {
            window.vemtoApi.savePluginData({
                text: this.text
            })
        }
    }
}
</script>