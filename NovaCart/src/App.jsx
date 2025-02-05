import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardCarousel from './CardCarousel.jsx'
import Dashboard from './Dashboard.jsx'
import Products from './Products.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dashboard/>
    <CardCarousel/>
    <Products/>
    </>
  )
}

export default App
