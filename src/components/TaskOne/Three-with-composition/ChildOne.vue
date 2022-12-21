<template>
    <h3>This IS State One</h3>
    <input type="text" v-model="stateOne.text">
    <button @click="stateOne.counter++">Counter1 {{ stateOne.counter }}</button>

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