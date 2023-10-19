<template>

        <ul class="list-group">
            <li class="list-group-item list-group-item-action" style="cursor: pointer;" v-for="task in tasks" :key="task._id" @click="$router.push(`tasks/${task._id}`)">
                {{ task.title }}
            </li>
        </ul>
  
</template>

<script lang="ts">
import { Task } from '@/interfaces/Task';
import { getTasks } from '@/services/TaskService';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            tasks: [] as Task[]
        }
    },
    methods: {
        async loadTasks (){
        const res = await getTasks()
        this.tasks = res.data;
        
       }
    },
    mounted() {
        this.loadTasks()
    },
})
</script>