<template>
   <v-container>
       <v-form @submit.prevent="create">
           <v-text-field
               label="Title*"
               v-model="form.title"
               type="text"
               required
           ></v-text-field>

           <v-autocomplete
               v-model="form.category_id"
               :items="categories"
               hide-details
               item-value="id"
               item-text="name"
               label="Select Category*"
           ></v-autocomplete>
           <br>
           <br>
           <vue-simplemde v-model="form.body"/>

           <v-btn type="submit" color="success">
              Create
           </v-btn>
       </v-form>
   </v-container>
</template>

<script>
export default {
    data(){
        return{
            form:{
                title:null,
                category_id:null,
                body:null
            },
            categories:{},
            errors:{}
        }
    },
    created(){
        axios.get('/api/category')
        .then(response => this.categories = response.data.data)
    },
    methods:{
            create(){
                axios.post('/api/question',this.form)
                .then(res => this.$router.push(res.data.path))
                .catch(error => this.errors = error.response.data.error)
            }
    }
}
</script>

<style scoped>

</style>
