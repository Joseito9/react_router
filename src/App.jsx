import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

function App() {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route 
          path='/'
          element={<Home/>}
          >
        </Route>
        <Route 
          path='/contact'
          element={<Contact/>}
          >
        </Route>
        <Route 
          path='*'
          element={<NotFound/>}
          >
        </Route>
      </Routes>
    </>
  )
}

export default App
