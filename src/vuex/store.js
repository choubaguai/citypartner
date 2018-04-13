import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


const state={
    username: ''
}
const getters={
    
}
const mutations={
    format(state,input){
        let year = input.getFullYear();
        let month = input.getMonth() + 1;
        month = month < 10 ? '0'+month : month;
        let day = input.getDate();
        day = day < 10 ? '0'+day : day;
        return  year +'-' + month +'-'+ day;
    },
}
const actions={
    addAcctive(context){
        context.commit(username,localStorage.getItem('username'))
    }
//     list(){
//         this.$ajax({
//                     method: 'post',
//                     url: '/api/audit/getAuditList',
//                     data: {
//                         step:2,
//                         pageno:1
//                     },
//                 })
//                 .then(response=>{
//                     console.log(JSON.parse(response.data.auditList).re_result.list);
//                     state.list=JSON.parse(response.data.auditList).re_result.list;
//                 })
//                 .catch(error=> {
//                     console.log(error)
//         });
//  }


}

export default new Vuex.Store({
state,mutations,getters,actions
})