<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link to="/bookmarks" class="navbar-brand">Home</router-link>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/tasks/new">Save a Bookmark</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Log out</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "MyNavbar",
})

</script>