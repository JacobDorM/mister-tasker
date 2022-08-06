import { taskService } from '../../service/tasks.service'
export default {
  state: {
    tasks: [],
  },
  getters: {
    tasksForDisplay(state) {
      return state.tasks
    },
  },
  mutations: {
    setTasks(state, { tasks }) {
      state.tasks = tasks
    },
    removeTask(state, { id }) {
      const idx = state.tasks.findIndex((task) => task._id === id)
      state.tasks.splice(idx, 1)
    },
    saveTask(state, { savedTask }) {
      const idx = state.tasks.findIndex((currTask) => currTask._id === savedTask._id)
      if (idx !== -1) state.tasks.splice(idx, 1, savedTask)
      else state.tasks.push(savedTask)
    },
  },
  actions: {
    async loadTasks({ commit }) {
      try {
        const tasks = await taskService.query()
        console.log('storeTasks', tasks)
        commit({ type: 'setTasks', tasks })
      } catch (err) {
        console.log(err)
      }
    },
    async removeTask({ commit }, { id }) {
      try {
        await taskService.remove(id)
        commit({ type: 'removeTask', id })
      } catch (err) {
        console.log(err)
      }
    },
    async saveTask({ commit }, { task }) {
      try {
        const savedTask = await taskService.save(task)
        console.log('savedTask', savedTask)
        commit({ type: 'saveTask', savedTask })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
