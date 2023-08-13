import Layout from './components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/> }>
        
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
