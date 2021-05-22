import './App.css'
import Feed from './components/Feed'
import Header from './components/Header'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Widgets from './components/Widgets'

function App() {
  const user = null
  return (
    <div className='app'>
      {user ? (
        <>
          <Header />

          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
