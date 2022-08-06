<template>
  <!-- <div> -->
  <task-add @saveTask="saveTask"></task-add>
  <task-list :tasks="getTasks" @removeTask="removeTask" @updateTaskField="updateTaskField"></task-list>
  <!-- </div> -->
</template>

<script>
import taskList from "../components/task-list.vue"
import taskAdd from "../components/task-add.vue";

export default {
  name: "main-app",
  props: [],
  components: {
    taskList,
    taskAdd
  },
  created() {
  },
  methods: {
    updateTaskField(taskField) {
      this.$store.dispatch({ type: 'saveTask', task: taskField })
    },
    removeTask(taskId) {
      this.$store.dispatch({ type: 'removeTask', id: taskId })
    },
    saveTask(newTask) {
      this.$store.dispatch({ type: 'saveTask', task: newTask })
    }
  },
  computed: {
    getTasks() {
      return this.$store.getters.tasksForDisplay
    },
  },
};
</script>

<style>
</style>

