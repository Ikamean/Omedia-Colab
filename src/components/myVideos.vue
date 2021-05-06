<template>
    <v-card width='100vw' class='ma-0 flex' height="50vh">
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="auto" v-for="video in videos"
                    :key="video.title">
                    <v-card
                    color="#385F73"
                    dark
                    >
                    <div v-if='video.title'>
                        <video width="300" height="200" controls :poster="video.thumbnail">
                        <source :src="video.url" type="video/mp4">
                        </video>

                        <div v-if="video.private == true">
                            <v-card-subtitle>{{video.title}}: Private</v-card-subtitle>
                        </div>    
                        <div v-else>
                            <v-card-subtitle>{{video.title}}: Public</v-card-subtitle>
                        </div>

                        <v-card-actions>
                            <v-btn
                            text
                            dark
                            @click="editPage(video._id)"
                            >
                            edit
                            </v-btn>

                            <v-btn
                            text
                            dark
                            @click="deletePage(video._id)"
                            >
                            delete
                            </v-btn>
                        </v-card-actions>
                    </div>
                        
                    <div v-else>
                        <v-card-title>You don't have videos</v-card-title>
                    </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
import router from '../router/index'
import Edit from '../components/edit.vue'
import Delete from '../components/delete.vue'

export default {
    name: 'MyVideos',
    components: {

    },

    data: ()=>({
        videos:  [],
    }),
    methods: {
        //returns my videos
        myVideos(){

            var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            credentials: 'include',
            };

            fetch("/api/user/me", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.videos = result.videos
                console.log(this.videos)
            })
            .catch(error => console.log('error', error));
        },

        editPage(id){
            router.push({ path: `/edit/${id}`, components: Edit }).catch(()=>{})
        },

        deletePage(id){
            router.push({ path: `/delete/${id}`, components: Delete }).catch(()=>{})
        },
    },
    mounted(){
        this.myVideos()
    }
}
</script>

<style scoped>
.v-card{
    overflow: auto;
}
</style>