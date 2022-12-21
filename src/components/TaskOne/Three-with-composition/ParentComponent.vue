<template>
    <TaskPointContainerVue>
        <template #heading>
            <h1>Child1 to Child2  communication</h1>
           <h4><p>Note: This can ALSO be done by <code>$emit()</code> and <code>$props</code>. But I prefered to use the Composition API </p></h4>
        </template>
        <template #output>

            <ChildOne   />
            <ChildTwo  />
        </template>
    </TaskPointContainerVue>
</template>
<script>
// import JsonDebug from '@/components/JsonDebug.vue';
import TaskPointContainerVue from '@/components/TaskOne/TaskPointContainer.vue';
import ChildOne from '@/components/TaskOne/Three-with-composition/ChildOne.vue';
import ChildTwo from '@/components/TaskOne/Three-with-composition/ChildTwo.vue';
import { ref } from 'vue';
export default {
    name:"ChildToChild",
    components:{
    TaskPointContainerVue,
    ChildOne,
    ChildTwo,
    // JsonDebug
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