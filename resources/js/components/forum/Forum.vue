<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
                <questions v-for="question in questions"
                           :key="question.path"
                           :data = question
                ></questions>
            </v-flex>
                sidebar
        </v-layout>
    </v-container>
</template>

<script>
import questions from "./Questions";

export default {
    components:{questions},
    data(){
        return{
            questions:{}
        }
    },
    created(){
        axios.get('/api/question')
        .then(res=> this.questions = res.data.data)
        .catch(error => console.log(error.response.data))
    }
}
</script>

<style scoped>

</style>
