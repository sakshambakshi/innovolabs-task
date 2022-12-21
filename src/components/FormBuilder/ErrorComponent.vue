<template>
    <ul class="error-container">
        <li class="error" v-for="(errorObj , i) in $props.errorArr" :key="i">
            {{ errorObj.error }}
        </li>

    </ul>

</template>
<script>
export default {
    props:{
        errorArr:{
            type: Array,
            default: () => ([])
        }
    }
}
</script>