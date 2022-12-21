/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { createStore } from 'vuex'
const flattenObj = (ob) => {
 
  // The object which contains the
  // final result
  let result = {};

  // loop through the object "ob"
  for (const i in ob) {

      // We check the type of the i using
      // typeof() function and recursively
      // call the function again
      if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
          const temp = flattenObj(ob[i]);
          for (const j in temp) {

              // Store temp in result
              result[i + '.' + j] = temp[j];
          }
      }

      // Else store ob[i] in result directly
      else {
          result[i] = ob[i];
      }
  }
  return result;
}
export default createStore({
  state: {
    users:[],
    searchText:'',
    paginationLimit: 5,
    currentPage: 1 ,
  },
  getters: {
    displayUsers(state){
      const searchText =  `${state.searchText}`?.trim().toLowerCase()
      // eslint-disable-next-line no-extra-boolean-cast
      if(Boolean(searchText.trim())){
        const filteredUser = state.users.filter(user =>{
            const searchedUser = flattenObj( {...user});
            const searchedUserValues = Object.values(searchedUser);
            
            // debugger



            for(const userInfo of searchedUserValues){
              // debugger
              const isExist = `${userInfo}`.toLowerCase().includes(searchText);
              // debugger
              if(isExist) {debugger; return true;}
            }
            return false
            console.log({user})

            const strKeys = Object.keys(user).filter(key => ['string' , 'number'].includes(typeof key))
            for(const key of strKeys){
              const value = `${user[key]}`.toLowerCase();
              if(value.includes(`${state.searchText}`.toLowerCase())){
                return  true ; //
              }
            }
        }) 
        console.log({filteredUser})
        return filteredUser
        
      }
      return state.users;
    },
    totalUsersToBeDisplayed(_, getters){
      return getters.displayUsers.length
    },
    totalPages(state, getters){
      return getters.totalUsersToBeDisplayed / state.paginationLimit
    },
    currentPageUsers(state , getters){
        const startingIndex = state.paginationLimit * (state.currentPage - 1);
        const endingIndex =  startingIndex + state.paginationLimit ;
        return getters.displayUsers.slice(startingIndex , endingIndex)
    }


  },
  mutations: {
    updateUser(state , newUsers){
      state.users = newUsers;
    },
    updateSearchText(state , searchText){
      state.searchText = searchText;
    },
    updatePaginationLimit(state , paginationLimit){
      state.paginationLimit = paginationLimit
    },
    updateCurrentPage(state , currentPage){
      // debugger
      state.currentPage = currentPage
    },
  },
  actions: {
    async  usersFetch({commit}){
      const API_URL = "https://jsonplaceholder.typicode.com/users";
      try{
        const resp = await fetch(API_URL);
        const users = await resp.json();
        commit('updateUser' , users) 
        return users;
      }catch(Err){
        //err
      }


    },

  },
  modules: {
  }
})
