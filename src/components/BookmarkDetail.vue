<template>
    <div class="col-md-4 offset-md-4">
            <h1 class="text-center h3 mb-3">Bookmark detail</h1>
            <form @submit.prevent="handleUpdate()" class="card card-body mb-4">
                <input type="text" v-model="currentBookmark.title" class="form-control mb-3" autofocus>
                <textarea rows="3" v-model="currentBookmark.url" class="form-control mb-3"></textarea>
                <img :src="currentBookmark.icon" alt="icon">
                <button class="btn btn-primary">Update</button>
            </form>
            <div class="text-center">
                <button @click="handleDelete()" class="btn btn-danger text-center">Delete</button>
            </div>
        </div>
</template>

<script lang="ts">
import { Bookmark } from "@/interfaces/Bookmark";
import { deleteBookmark, getBookmark, updateBookmark } from "@/services/BookmarkService";
import { defineComponent } from "vue";


    export default defineComponent({
        data() {
            return {
                currentBookmark: {} as Bookmark
            }
        },
        methods: {
            async loadBookmark(id: string){
                const res = await getBookmark(id)
                this.currentBookmark = res.data                
            },
            async handleUpdate (){
                if (typeof this.$route.params.id === 'string'){
                    const res = await updateBookmark(this.$route.params.id, this.currentBookmark)
                    this.$router.push({ name: 'bookmarks' })
                }
            },
            async handleDelete (){
                if (typeof this.$route.params.id === 'string'){
                    const res = await deleteBookmark(this.$route.params.id)
                    this.$router.push({ name: 'bookmarks' })
                    
                }
            }
        },
        mounted() {
            if (typeof this.$route.params.id === 'string'){
                this.loadBookmark(this.$route.params.id)
            }
        },
    })
</script>