import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <Header/>
      <main className='w-full min-h-[calc(100vh-160px)] '>
      <Outlet />
      </main>
      <Footer/>

    </>
  )
}

export default App
