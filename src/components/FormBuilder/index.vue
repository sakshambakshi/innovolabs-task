<template>
    <div>
        <div v-if="errorArr.length > 0">
            <ErrorComponent v-bind="{errorArr}" />            
        </div>
        <form @submit.prevent="formHandler">
            <template  v-for="formInput  in  formData.data" :key="formInput.token" >
                <div>
                    <label :for="formInput.token">{{formInput.props.title}}</label>
                    <input v-bind="{type: formInput.type , ...inputAttrs(formInput.props) , id:formInput.token }"   v-model="formInput._value" />
                    
                </div>
            </template>
            <button type="submit">submit</button>  
        </form>
    </div>
</template>

<script>
import { onMounted  , reactive , computed , ref} from 'vue';
import ErrorComponent from "@/components/FormBuilder/ErrorComponent.vue"
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
// import {computed} from 'vue';
export default {
    name:"FormComponnet",
    components:{
        ErrorComponent
    },
    props:{
        formDesignArr:{
            type: Array,
            default: () =>([])

        }
    },
    setup($props){
        const formData = reactive({
            data:[]
        })
        const errorArr = ref([])
        const formHandler = function(){
            const {isValid  , errArr}= isFormValid();
            errorArr.value =  errArr
            debugger
                if(errorArr.value.length == 0){
                    return alert('Success')
                }

                return alert("Not Valid")
            // debugger;
        }
        function isFormValid(){
            
            const { arr} = validationMapTokenComputed.value;
            const errArr = [];
            let isValid = false 
            arr.forEach(([token , required])=>{
                if(typeof required == 'string'){
                    const valueToBeDpendent = tokenBasedValues.value[required];
                    const valueToBeValidated  = tokenBasedValues.value[token]
                
                    if(valueToBeDpendent){
                        if(valueToBeValidated){
                            return 

                        }
                        errArr.push({'errorAt': token , error: `Since   ${required} is true . Make sure ${token} it's valid` })
                        isValid = false

                    }

                }
                if(required === true){
                    const valueToBeValidated = tokenBasedValues.value[token];
                    // eslint-disable-next-line no-extra-boolean-cast
                    if(Boolean(valueToBeValidated)){
                        return 
                    }

                    errArr.push({errorAt: token , error:`This input ${token} is not correct please fill the correct value`})
                    isValid = true ;
                    
                } 
                return {isValid , errArr}
            })
            // debugger
            isValid = errArr.length == 0
            return {isValid , errArr}
        }
        function _isFormValid(){
            
            const { arr} = validationMapTokenComputed.value;
            const errArr = [];
            let isValid = false 
            arr.forEach(([token , required])=>{
                if(typeof required == 'string'){
                    //NOTE
                    // if its dependednt on another in its required
                    const valueToBeValidated = tokenBasedValues.value[required];
                    
                    //NOTE
                    // here a recursive case can be created i.e if a input required token refers to another token in its required so i recursive function needs to be writter , Due to lack of time I am avoding it (That is why obj was declared)

                    // eslint-disable-next-line no-extra-boolean-cast
                    if(Boolean(valueToBeValidated)){
                        return 

                    }

                    errArr.push({'errorAt': token , error: `This input is dependent on  ${required}. Make sure it's be correct` })
                    isValid = false
                    return 
                }
                if(required === true){
                    const valueToBeValidated = tokenBasedValues.value[token];
                    // eslint-disable-next-line no-extra-boolean-cast
                    if(Boolean(valueToBeValidated)){
                        return 
                    }

                    errArr.push({errorAt: token , error:`This input ${token} is not correct please fill the correct value`})
                    isValid = true ;
                    
                } 
                return {isValid , errArr}
            })
            // debugger
            isValid = errArr.length == 0
            return {isValid , errArr}
        }
        const tokenBasedValues = computed(function(){
            const obj = {};
            formData.data.forEach(inp =>{

                obj[inp.token] = inp._value
            })

            return obj;

        })
        const validationMapTokenComputed = computed(function(){
            const obj = {};
            const arr = []
            formData.data.forEach(input => {
                const token = input.token
                if(input.props.required){
                   obj[token] =  input.props.required
                    arr.push([token , input.props.required])
                }
            })
            return {obj , arr}

        })
        
        onMounted(() =>{

            console.log($props.formDesignArr.map((x) => x.props.default));
            formData.data = $props.formDesignArr.map(x => ({...x , _value:x.props.default || null }));
        })
        const inputAttrs = function(inputObj){
            const attrs = {...inputObj};
            delete attrs.title;
            delete attrs.required
            return attrs
        }
        return {
            formHandler , inputAttrs  , formData , validationMapTokenComputed , errorArr , tokenBasedValues
        }
    }
}
</script>