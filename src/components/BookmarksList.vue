<template>

        <ul class="list-group">
            <li class="list-group-item list-group-item-action" style="cursor: pointer;" 
            v-for="bookmark in bookmarks" 
            :key="bookmark._id" 
            @click="$router.push(`bookmarks/${bookmark._id}`)">
                {{ bookmark.title }}
            </li>
        </ul>
  
</template>

<script lang="ts">
import { Bookmark } from '@/interfaces/Bookmark';
import { getBookmarks } from '@/services/BookmarkService';
import { defineComponent } from 'vue';
import { useStore } from '../store';

export default defineComponent({
    data() {
        return {
            bookmarks: [] as Bookmark[]
        }
    },
    setup() {
    const store = useStore();
    return {
     currentUser: store.state.currentUser,
    
    };
     },
    methods: {
        async loadBookmarks (){
        const res = await getBookmarks(this.currentUser?._id)
        this.bookmarks = res.data;
        
       }
    },
    mounted() {
        this.loadBookmarks()
    }
})
</script>