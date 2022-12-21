<template>
    <h3>This IS State Two</h3>
    <input type="text" v-model="stateTwo.text">
    <button @click="stateTwo.counter++">Counter2 {{ stateTwo.counter }}</button>

    <JsonDebug v-bind="{data: {stateOne , stateTwo} }" />
</template>
<script>
import {stateOne , stateTwo} from "@/Composition/DataSharingComposition.js"
import JsonDebug from '@/components/JsonDebug.vue'
export default {
    components:{
        JsonDebug
    },
    setup(){
        return {
            stateOne , stateTwo
        }
    }
}
</script>