// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, getDoc, getDocs, deleteDoc, onSnapshot, doc, addDoc, updateDoc, setDoc } from 'firebase/firestore'
// Required for side-effects
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4dHuF7OEm2WGXHkLeT1uLZifMYgSIGSE',
  authDomain: 'mister-tasker-142e0.firebaseapp.com',
  projectId: 'mister-tasker-142e0',
  storageBucket: 'mister-tasker-142e0.appspot.com',
  messagingSenderId: '491689026190',
  appId: '1:491689026190:web:a5ffa69893c9fd505a9fdf',
  measurementId: 'G-S95YMMWT23',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const db = getFirestore(app)

const colRef = collection(db, 'tasks')

// window.addEventListener('load', onInit)

import {} from 'firebase/firestore'

async function query() {
  try {
    //  * learn how to render and use onSnapshot
    let tasks = []
    const querySnapshot = await getDocs(collection(db, 'tasks'))
    querySnapshot.forEach((doc) => {
      tasks.push({ _id: doc.id, ...doc.data() })
    })
    return tasks
  } catch (err) {
    console.log(`query doesnt work: ${err}`)
  }
}

async function getById(taskId, colName) {
  try {
    const docRef = doc(db, colName, taskId)
    const docSnap = await getDoc(docRef)
    const task = { _id: docRef.id, ...docSnap.data() }
    return task
  } catch (err) {
    console.log(`getById doesnt work: ${err}`)
  }
}

async function remove(taskId, colName) {
  try {
    await deleteDoc(doc(db, colName, taskId))
  } catch (err) {
    console.log(`query doesnt work: ${err}`)
  }
}

async function save(task, colName) {
  try {
    console.log(task)
    if (!task._id) {
      return await _createTask(task, colName)
    } else {
      if (task.data) {
        // * {_id: taskId, data: {status: "pending"}}
        console.log('task', task)
        const taskRef = doc(db, colName, task._id)
        await updateDoc(taskRef, task.data)
        return getById(task._id, colName)
      } else {
        console.log('edditer')
        await setDoc(doc(db, colName, task._id), task)
        return task
      }
    }
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

const _createTask = async (task, colName) => {
  task.status = 'pending'
  task.createdAt = Date.now()
  task.doneAt = null
  const docRef = await addDoc(collection(db, colName), task)
  const docSnap = await getDoc(docRef)
  const newTask = { _id: docRef.id, ...docSnap.data() }
  return newTask
}

export const firebaseService = {
  query,
  remove,
  save,
  getById,
}

// async const
// querySnapshot()
// function getTasks() {
//   // real-time collection data
//   onSnapshot(colRef, (snapshot) => {
//     console.log('snapshot :>>', snapshot)
//     const books = snapshot.docs.map((doc) => {
//       return { id: doc.id, ...doc.data() }
//     })
//     _renderBooksTable(books)
//   })
// }
