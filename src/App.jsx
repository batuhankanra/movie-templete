import React from 'react'
import Search from './components/search'
import Movie from './components/movie'
import Footer from './components/footer'
import { useSelector } from 'react-redux'
import Modal from './modals'

export default function App() {
  const {modal}=useSelector(state=>state.modal)
 
  return (
    <div className="bg-black text-white h-full w-full min-h-screen">
      {modal && <Modal />}
      <Search />
      <Movie />
      <Footer />
    </div>
  )
}
