import { useEffect, useRef, useState } from 'react'
import {
  Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

// components
import { HeaderNav } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { HomePage } from './pages/homepage';
import { BackgroundPlayer } from './components/BackgroundVideo';
import { Backoffice } from './pages/backoffice';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <BackgroundPlayer />
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/backoffice' element={<Backoffice />} />
        </Routes>
      </BrowserRouter>
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

