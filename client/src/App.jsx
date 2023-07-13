import './App.css'
import { NextUIProvider } from '@nextui-org/react';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <NextUIProvider>
        <Footer />
      </NextUIProvider>
    </>
  )
}

export default App