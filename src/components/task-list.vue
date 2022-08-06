<template>
    <section class="task-list" v-if="tasks">
        <table>
            <thead>
                <tr>
                    <th v-for="header in headers">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <task-preview v-for="task in tasks" :key="task._id" @removeTask="removeTask"
                    @updateTaskField="updateTaskField" :task="task">
                </task-preview>
            </tbody>
        </table>
    </section>
</template>

<script>
import taskPreview from './task-preview.vue'

export default {
    name: 'task-list',
    props: {
        tasks: {
            type: Array,
            required: true
        },
    },
    components: {
        taskPreview
    },
    computed: {
        // ask how to get the specific keys from tasks array
        headers() {
            return ["Name", "Importance", "Description", "Status", "Actions"]
        },

    },
    mounted() {
    },
    methods: {
        updateTaskField(taskField) {
            this.$emit("updateTaskField", taskField)
        },
        removeTask(taskId) {
            this.$emit("removeTask", taskId)
        }
    },
}
</script>

<style>
</style>