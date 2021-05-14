<template>
    <div v-if="question">
        <edit-question v-if="editing"  :data = question></edit-question>
        <show-question
            v-else
            :data = question
        ></show-question>

    </div>

</template>

<script>
import showQuestion from './ShowQuestion'
import editQuestion from './EditQuestion'
export default {
    components:{showQuestion,editQuestion},
    data(){
        return{
            question:null,
            editing: false,
        }
    },
    created(){
        this.listen()
        this.getQuestion()
    },
    methods:{
        listen(){
            EventBus.$on('startEditing',()=>{
                this.editing = true
            })
           EventBus.$on('cancelEditing',()=>{
               this.editing = false
           })
        },
        getQuestion(){
            axios.get(`/api/question/${this.$route.params.slug}`)
                .then(res => this.question=res.data.data)
                .catch(error=>error.response.data)
        }
    }

}
</script>

<style scoped>

</style>
