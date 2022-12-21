<template>
  <pre>
    {{value}}

  </pre>
  --------------------
  
    <FormBuilder v-bind="{
      formDesignArr:JSON.parse(value)
    }"  />
    ------------
</template>
  
  <script>
  // @ is an alias to /src
import FormBuilder from '@/components/FormBuilder/index.vue'
// import { placeholder } from '@babel/types';
import {ref} from "vue"
  export default {
    name: 'HomeView',
    components: {
      FormBuilder
    },
    setup(){
      const value = ref(JSON.stringify([
        {
          token:'PERSON_NAME',
          type: 'text' ,
          props:{
            title:'Enter your Name',
            required: true ,
            placeholder:'e.g. John Doe'
          }
        },
        {
          token:'IS_PERSON_MINOR',
          type: 'checkbox' ,
          props:{
            title:'Is person minor',
            default:false
            // placeholder:'e.g. John Doe'
          }
        },
        {
          token:'PERSON_DOB',
          type: 'date' ,
          props:{
            title:'Enter your DOB ',
            required: 'IS_PERSON_MINOR' ,

            // placeholder:'e.g. John Doe'
          }
        },
      ] , null , 2));
      return {value}
    }
  }
  </script>
  