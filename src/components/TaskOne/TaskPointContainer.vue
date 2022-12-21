<template>
    <div class="task-container">
        <div class="heading-container">
            <slot name="heading"></slot>

        </div>
        <div class="output-container">
            <slot name="output" ></slot>

        </div>

    </div>
</template>
<script>

export default{
    name:"TaskPointsContainer"
}

</script>