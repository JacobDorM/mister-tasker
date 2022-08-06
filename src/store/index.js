import { createStore } from 'vuex'
import taskModule from './modules/task-module'

export const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    taskModule,
  },
})
