import { Home } from './pages/HomePage'
// import { Product } from './pages/ProductPage'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'


import './App.css'

export const App = () => {
  return(
    <div>
      < Header />
      <Routes>
        <Route path='/' element={< Home/>}/>
        {/* <Route path='/product' element={< Product/>}/> */}
      </Routes>
    </div>
  )
}
