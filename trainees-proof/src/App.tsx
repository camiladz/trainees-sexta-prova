import './App.css'
import { AgeModalContextProvider } from './context/AgeModalContext'
import { MinicartContextProvider } from './context/MinicartContext'
import { HomePage } from './page/HomePage'

function App() {

  return (
    <AgeModalContextProvider>
      <MinicartContextProvider>
        <HomePage />
      </MinicartContextProvider>
    </AgeModalContextProvider>
  )
}

export default App
