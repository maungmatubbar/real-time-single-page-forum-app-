<template>
        <v-container>
            <v-card>
                <v-card-title>
                    <div>
                        <div class="headline">
                            {{data.title}}
                        </div>
                        <span class="grey--text">
                        {{data.user}} said {{data.created_at}}
                    </span>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn color="primary">5 Replies</v-btn>
                </v-card-title>
                <v-card-text v-html="body"></v-card-text>
                <v-card-actions v-if="ownId">
                   <v-btn fab dark small color="cyan" @click="edit"><v-icon dark>edit</v-icon></v-btn>
                  <v-btn fab small dark color="error" @click="destroy"><v-icon dark>delete</v-icon></v-btn>
                </v-card-actions>
                </v-card>
        </v-container>

</template>

<script>

export default {
    props:['data'],
    data(){
        return{
            ownId: User.ownId(this.data.user_id)
        }
    },
    computed:{
        body(){
            return md.parse(this.data.body)
        }
    },
    methods:{
        destroy(){
            axios.delete(`/api/question/${this.data.slug}`)
            .then(res=> this.$router.push('/forum'))
            .catch(error => console.log(error.response.data))
        },
        edit(){
            EventBus.$emit('startEditing')
        }
    }
}
</script>

<style scoped>

</style>
