<template>
    <v-card width='100vw' class='ma-0 flex'  height="70vh">
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12" v-for="i in 6"
                    :key="i">
                    <v-card
                    color="#385F73"
                    dark
                    >
                        <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="100%"
                        width="100%"
                        ></v-img>

                        <v-card-subtitle>test video.</v-card-subtitle>

                        <v-card-actions>
                            <v-btn text @click="editVid()">
                            <Edit />
                            </v-btn>
                            <v-btn text @click="deleteVid()">
                            <Delete />
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
import Delete from '../components/delete.vue';
import Edit from '../components/edit.vue'

export default {
    name: 'MyVideos',
    components: {
        Delete,
        Edit
    },
    data: ()=>({
        
    }),
    methods: {
        editVid(){

        },

        deleteVid(){

        }
    }
}
</script>

<style scoped>
.v-card{
    overflow: auto;
}
</style>