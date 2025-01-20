import './css/index.css'
import { BrowserRouter, Routes, Route } from "react-router"
import Game from './pages/Game.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='game' element={<Game />} />
        </Routes>
      </BrowserRouter >
  )
}

export default App;