import { useState,useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {FiSettings} from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4 z-[1000]">

        </div>

      </div>

      </BrowserRouter>
      
    </div>
  )
}

export default App
