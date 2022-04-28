import { useState } from 'react'

// components
import { HeaderNav } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { HomePage } from './pages/homepage';
import { BackgroundPlayer } from './components/BackgroundVideo';
import { Backoffice } from './pages/backoffice';

function App() {
  
  return (
    <div className="App">
        <HeaderNav />
        <BackgroundPlayer />
        <MainPage/>
    </div>
  )
}

export function MainPage() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <>
      {isClicked 
        ? <ProductGrid />
        : <HomePage EnterStore={() => setIsClicked(true)} /> 
      }
    </>
  )
}

export default App

