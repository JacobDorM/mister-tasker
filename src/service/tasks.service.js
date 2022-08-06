import { firebaseService } from './firebase.service'
const colName = 'tasks'
function query() {
  return firebaseService.query()
}

function getById(taskId) {
  return firebaseService.getById(taskId, colName)
}

function remove(taskId) {
  return firebaseService.remove(taskId, colName)
}

function save(task) {
  return firebaseService.save(task, colName)
}

export const taskService = {
  query,
  remove,
  save,
  getById,
}
