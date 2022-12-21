<template>
    <div>
        <input type="text" v-model="searchFilterText" />
        <table>
            <thead>

                <tr>
                    <slot name="table-head"></slot>
                </tr>
            </thead>
            <tbody>

                <tr v-for="(tableRow , i) in tableRows" :key="i">
                    <slot name="table-row" v-bind="{tableRow , index: i}"></slot>
                </tr>
            </tbody>
            </table>
        <template v-for="i in totalPages" :key="i">
            <button v-on="{click: pageChange(i)}">{{ i }}</button >
        </template>
    </div>
</template>
<script>
    import { ref , computed  } from "vue";
export default {
    name:'TableComponent',
    props:{
        tableRows:{
            types: Array,
            default:() => ([])
        }
    },
    setup($props){
        const currentPagination = ref(1);
        const paginationLimit = ref(2 );
        const searchFilterText = ref('');

        const searchArrComputed = computed(function(){
            // eslint-disable-next-line no-extra-boolean-cast
            // if(Boolean(searchFilterText.value.trim())){
                
            // }
            return $props.tableRows
        })

        const totalPages = computed(function(){
            return searchArrComputed.value.length / paginationLimit.value ;  
        })
        function pageChange(ith){
            currentPagination.value = ith
        }
        return {
            currentPagination ,
            paginationLimit ,
            totalPages,
            pageChange , searchFilterText
        }
    }
}
</script>