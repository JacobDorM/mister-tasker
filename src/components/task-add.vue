<template>
    <section class="task-add">
        <h1 v-if="isEditPage">EditPage</h1>
        <form @submit.prevent="saveTask">
            <div class="form-control">
                <label for="txt" class="form-label">Task Name</label>
                <input required v-model="task.title" id="txt" type="text" class="form-input"
                    placeholder="Task name..." />
            </div>
            <div class="form-control">
                <label for="importance" class="form-label">Importance</label>
                <input required v-model.number="task.importance" id="importance" type="number" class="form-input"
                    placeholder="task importance..." min="1" max="3" />
            </div>
            <div class="form-control">
                <label for="description" class="form-label">Description</label>
                <input mrequired v-model="task.description" id="description" type="text" class="form-input"
                    placeholder="Task description..." />
            </div>
            <dropdown v-if="isEditPage"></dropdown>
            <button type="submit">Save</button>
        </form>
    </section>
</template>

<script>
import taskPreview from './task-preview.vue'
import dropdown from './dropdown.vue'

export default {
    data() {
        return {
            task: {
                title: "",
                description: "",
                importance: "",
                status: ""
            },
            isEditPage: false,
        }
    },
    props: {
        taskToEdit: {
            type: Object
        }
    },
    name: 'task-list',
    components: {
        taskPreview,
        dropdown
    },
    computed: {
        // ask how to get the specific keys from tasks array
        headers() {
            return ["Name", "Importance", "Status", "Actions"]
        },

    },
    mounted() {
        //  cheack which page we at
    },
    created() {
        this.$route.name === 'task-edit' ? this.isEditPage = true : this.isEditPage = false
        if (this.taskToEdit) {
            this.task = this.taskToEdit
        }
    },
    methods: {
        saveTask() {
            if (!this.task.importance || !this.task.title || !this.task.description) return
            this.$emit("saveTask", { ...this.task })
        }
    },
}
</script>

<style>
</style>