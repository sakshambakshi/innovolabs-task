<template>
    <pre>
        {{ JSON.stringify($props , null , 2) }}
    </pre>
</template>
<script>
export default {
    name:"JsonDebug",
    props:{
        data:{
            type: Object,
            default: () => ({})
        }
    }
}
</script>