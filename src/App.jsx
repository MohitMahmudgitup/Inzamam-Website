import './App.css'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Navber/Header.jsx'
import { Outlet } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top";



function App() {
 

  return (
    <>
    <Header/>
      <main className='w-full min-h-[calc(100vh-160px)] '>
      <Outlet />
      </main>
    <Footer/>
      <ScrollToTop
        smooth
        style={{
          backgroundColor: '#FFF',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          boxShadow:'0 0 10px black',
          // right: '20px',
          bottom: '20px',
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          // color:"black"
        }}
      />



    </>
  )
}

export default App
