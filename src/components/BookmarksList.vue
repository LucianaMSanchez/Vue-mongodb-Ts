<template>

        <ul class="list-group">
            <li class="list-group-item list-group-item-action" style="cursor: pointer;" v-for="bookmark in bookmarks" :key="bookmark._id" @click="$router.push(`bookmarks/${bookmark._id}`)">
                {{ bookmark.title }}
            </li>
        </ul>
  
</template>

<script lang="ts">
import { Bookmark } from '@/interfaces/Bookmark';
import { getBookmarks } from '@/services/BookmarkService';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            bookmarks: [] as Bookmark[]
        }
    },
    methods: {
        async loadBookmarks (){
        const res = await getBookmarks()
        this.bookmarks = res.data;
        
       }
    },
    mounted() {
        this.loadBookmarks()
    },
})
</script>