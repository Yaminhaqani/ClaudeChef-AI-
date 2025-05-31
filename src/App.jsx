import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="outer w-full flex justify-center mt-[5px]">
    <div className="div flex flex-col gap-y-12 w-[98%]">
    <Header></Header>
    <Main></Main>
    </div>
    </div>
  )
}

export default App
