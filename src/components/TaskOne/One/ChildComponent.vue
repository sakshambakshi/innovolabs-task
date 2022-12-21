<template>
  <h2>Sharing the parent to child via props</h2>
  <JsonDebugVue v-bind="{ data: $props.dummyData }" />
</template>
<script>
import JsonDebugVue from "@/components/JsonDebug.vue";
export default {
  components: {
    JsonDebugVue,
  },
  props: {
    dummyData: {
      type: Object,
      default: () => ({field1: 'Default Data'}), // default data 
    },
  },
};
</script>
