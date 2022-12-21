<template>
    <TaskPointContainerVue>
        <template #heading>
            <h1>Child to Parent  communication</h1>
        </template>
        <template #output>
            <JsonDebug v-bind="{data:{lastClick}}" />
            <ChildComponentVue  v-on="{lastClick: onLastClick}" />
        </template>
    </TaskPointContainerVue>
</template>
<script>
import JsonDebug from '@/components/JsonDebug.vue';
import TaskPointContainerVue from '@/components/TaskOne/TaskPointContainer.vue';
import ChildComponentVue from '@/components/TaskOne/Two/ChildComponent.vue';
import { ref } from 'vue';
export default {
    name:"ParentComponent",
    components:{
    TaskPointContainerVue,
    ChildComponentVue,
    JsonDebug
},
    setup(){
        const lastClick = ref(null)
        const onLastClick = (timeStr) =>{
            lastClick.value = timeStr
        } 
        return {
            onLastClick,
            lastClick
        }
    }
}
</script>