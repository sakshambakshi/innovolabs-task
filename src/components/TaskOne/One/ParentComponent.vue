<template>
    <TaskPointContainerVue>
        <template #heading>
            <h1>Parent-child communication</h1>
        </template>
        <template #output>
            <input v-model="dummyData.text" placeholder="Type Here"/>
            <ChildComponentVue v-bind="{dummyData}" />
        </template>
    </TaskPointContainerVue>
</template>
<script>
import TaskPointContainerVue from '@/components/TaskOne/TaskPointContainer.vue';
import ChildComponentVue from '@/components/TaskOne/One/ChildComponent.vue';
import { reactive } from 'vue';
export default {
    name:"ParentComponent",
    components:{
        TaskPointContainerVue,
        ChildComponentVue
        
    },
    setup(){
        const dummyData = reactive({
            text:''
        })
        return {
            dummyData
        }
    }
}
</script>