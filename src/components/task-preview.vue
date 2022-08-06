<template>
    <tr>
        <td>{{ task.title }}</td>
        <td>{{ task.importance }}</td>
        <td>{{ task.description }}</td>
        <!-- <td> -->
        <dropdown :taskStatus="task.status" @updateStatus="updateTask"></dropdown>
        <!-- </td> -->
        <td><button @click="removeTask(task._id)">Delete task</button></td>
        <td><button @click="editTask(task._id)">Edit task</button></td>
    </tr>
</template>
<!-- :taskStatus="task.status" -->
<script>
import dropdown from './dropdown.vue'
export default {
    name: 'task-preview',
    props:
    {
        task: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
        }
    },
    created() {
    },
    components: {
        dropdown,
    },
    methods: {
        updateTask(taskField) {
            this.$emit("updateTaskField", { _id: this.task._id, data: taskField })
        },
        removeTask(taskId) {
            this.$emit("removeTask", taskId)
        },
        editTask(taskId) {
            this.$router.push(`/task/edit/${taskId}`)
        }
    },
    computed: {}
}
</script>

<style>
</style>