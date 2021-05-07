<template>
    <v-card width='100vw' class='ma-0 flex' height="50vh">
        <v-container fluid>
            <v-row justify="center">
                
                <div v-if="noVideo">
                    <h1>You don't have videos</h1>
                </div>

                <v-col cols="auto" v-for="video in videos"
                    :key="video.title">
                    <v-card
                    color="#385F73"
                    dark
                    >
                    <div>
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
        noVideo: false
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
                this.check()
            })
            .catch(error => console.log('error', error));
        },

        editPage(id){
            router.push({ path: `/edit/${id}`, components: Edit,}).catch(()=>{})
        },

        deletePage(id){
            router.push({ path: `/delete/${id}`, components: Delete }).catch(()=>{})
        },
        check(){
        if(this.videos.length == 0){
            this.noVideo = true
        }else{
            this.noVideo = false
            }
        }
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