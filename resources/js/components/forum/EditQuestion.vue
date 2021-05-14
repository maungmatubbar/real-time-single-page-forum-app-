<template>
    <v-container fluid>
        <v-card>
            <v-form @submit.prevent="update">
                <v-text-field
                    label="Title*"
                    v-model="form.title"
                    type="text"
                    required
                ></v-text-field>
                <vue-simplemde v-model="form.body"/>
                <v-card-actions>
                    <v-btn type="submit"small dark color="teal">
                        <v-icon dark>save</v-icon>
                    </v-btn>
                    <v-btn @click="cancel" small color="error">
                        <v-icon>cancel</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            form:{
                title: null,
                body: null
            }
        }
    },
    created(){
        this.form = this.data
    },
    methods:{
        cancel(){
            EventBus.$emit('cancelEditing')
        },
        update(){
            axios.patch(`/api/question/${this.form.slug}`,this.form)
            .then(res=>this.cancel())
        }
    }
}
</script>

<style scoped>

</style>
