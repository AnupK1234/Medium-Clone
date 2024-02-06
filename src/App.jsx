import { Route, Routes } from 'react-router-dom'
import './App.css'
import Demo from './components/Demo/Demo'
import UnauthenticatedHeader from './components/Headers/UnauthenticatedHeader'
import AuthenticatedHeader from './components/Headers/AuthenticatedHeader'
import Home from './components/Home/Home'
import { auth } from './firebase/firebase.config'

function App() {
  
  return (
    <>
    {!auth ? <AuthenticatedHeader/> : <UnauthenticatedHeader/>}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/demo' element={<Demo/>} />
    </Routes>
    </>
  )
}

export default App
