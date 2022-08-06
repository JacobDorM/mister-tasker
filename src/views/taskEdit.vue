<template>
    <section class="task-edit" v-if="taskToEdit">
        <router-link to="/">Go Back to Home</router-link>
        <task-add :taskToEdit="taskToEdit" @saveTask="saveTask" />
    </section>
</template>

<script>
import taskAdd from '../components/task-add.vue'
import { taskService } from '../service/tasks.service';
export default {
    name: "task-edit",
    props: [],
    data() {
        return {
            taskToEdit: null,
        }
    },
    components: {
        taskAdd
    },
    async created() {
        const { taskId } = this.$route.params
        const task = await taskService.getById(taskId)
        this.taskToEdit = task


    },
    methods: {
        async saveTask(task) {
            try {
                await this.$store.dispatch({ type: 'saveTask', task })
                this.$router.push('/')
            } catch (err) { }
        },
    },
    computed: {
    },
};
</script>

<style>
</style>

