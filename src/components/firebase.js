import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyD19ox7TChHKmdcPg-p0QbjnjUIHnhhd8k',
  authDomain: 'facebook-clone-1d252.firebaseapp.com',
  projectId: 'facebook-clone-1d252',
  storageBucket: 'facebook-clone-1d252.appspot.com',
  messagingSenderId: '951830015878',
  appId: '1:951830015878:web:e12b438d03893e2ec68607',
  measurementId: 'G-4Z90W0JGTG',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
