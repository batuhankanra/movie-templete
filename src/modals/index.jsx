import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { _removeModal } from '../store/modal'
import { FaStar } from 'react-icons/fa'
import { VscDebugBreakpointLog } from "react-icons/vsc";


const bgUrl=import.meta.env.VITE_API_BG_IMG
const imgUrl=import.meta.env.VITE_API_IMAGE_URL


export default function Modal() {
  const dispatch=useDispatch()
    const {modal}=useSelector(state=>state.modal)
    const {data}=useSelector(state=>state.movie)
    const currentModal=data.find(m=>m.id===modal)
   
  return (
    <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-20 '>
        <div className='bg-zinc-800 relative w-[1200px] p-3  rounded-md'>
          <img src={`${bgUrl}/${currentModal.backdrop_path}`} className=' rounded-md opacity-100' />
          <button onClick={()=>dispatch(_removeModal())} className='z-10 bg-white absolute top-3 right-3 px-3 py-1 rounded-full text-base text-black hover:bg-zinc-300 '>X</button>
          <div className="flex  justify-between  py-4">
            <div className='flex  flex-col  gap-y-2'>
              <h1 className='text-6xl font-bold  '>{currentModal.title}</h1>
              <div className='flex items-center gap-x-3  text-zinc-500'>
                <p className=' p-2 text-lg'>{currentModal.release_date.substring(0,4)}</p>
                <p className=' p-2 text-lg'><VscDebugBreakpointLog /></p>
                <p className='flex items-center gap-x-1 text-lg '>Imd: <FaStar className='text-yellow-600' /> {currentModal.vote_average}</p>
              </div>
              <button className='bg-red-600 w-32 py-1 px-2 rounded-full text-xl  shadow-xl hover:scale-105  transition-all duration-200 hover:bg-red-900 '>Baslayin</button>
            </div>
            <div className='text-lg font-medium border-x-2 shadow-lg border-zinc-700 rounded-lg w-[500px] p-2 '>
              {currentModal.overview}
            </div>
          </div>
          

        </div>
    </div>
  )
}
