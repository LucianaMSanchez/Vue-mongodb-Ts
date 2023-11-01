<template>
    <div class="col-md-4 offset-md-4">
        <form @submit.prevent="saveBookmark()" class="card card-body">
            <h1 class="text-center h3 mb-3">Save Bookmark</h1>
            <input type="text" placeholder="title" v-model="bookmark.title" class="form-control mb-3" autofocus>
            <input type="text" placeholder="category" v-model="bookmark.category" class="form-control mb-3">
            <textarea rows="3" placeholder="url" v-model="bookmark.url" class="form-control mb-3"></textarea>
            <button class="btn btn-primary" :disabled="!bookmark.title || !bookmark.url">Save</button>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Bookmark } from '@/interfaces/Bookmark';
import { createBookmark } from '@/services/BookmarkService';
import { useUserStore } from '@/stores/userStore'

export default defineComponent({
  data() {
    return {
      bookmark: {} as Bookmark
    };
  },
  methods: {
    async saveBookmark() {
      const currentUser = useUserStore((state) => state.currentUser);
      if(currentUser){
          this.bookmark.profileId = currentUser?._id;
      }

      const res = await createBookmark(this.bookmark);
      this.$router.push({ name: 'bookmarks' });
    },
  },
});
</script>