<template>
    <ChildToParent />
    <ParentToChild />
    <ChildToChild />
</template>
<script>
import ChildToParent from '@/components/TaskOne/One/ParentComponent.vue';
import ParentToChild from '@/components/TaskOne/Two/ParentComponent.vue';
import ChildToChild from '@/components/TaskOne/Three-with-composition/ParentComponent.vue';

export default {
    components:{
        ChildToParent,
        ParentToChild,
        ChildToChild
    }
}
</script>