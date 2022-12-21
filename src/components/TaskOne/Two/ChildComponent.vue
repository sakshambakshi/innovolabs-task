<template>
  
  <h4>Sharing the child data to parent via $emit
  </h4>

  <div>
    <p>Emitting last Clicked to Parent</p>
    <button @click="$emit('lastClick' ,{counter : counter++,  time: (new Date().toTimeString())})">Click Here {{ counter }} </button>
  </div>
  
</template>
<script>
import {ref} from "vue"
export default {

  emits:['lastClick'], // registartion

  setup(){
    const counter = ref(0)

    return {
      counter
    }
  }
};
</script>
