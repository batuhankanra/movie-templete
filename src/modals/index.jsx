import React from 'react'
import { useSelector } from 'react-redux'


const bgUrl=import.meta.env.VITE_API_BG_IMG
const imgUrl=import.meta.env.VITE_API_IMAGE_URL
export default function Modal() {
    const {modal}=useSelector(state=>state.modal)
    const {data}=useSelector(state=>state.movie)
    const currentModal=data.find(m=>m.id===modal)
  return (
    <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-20'>
        <div>
          <img src={`${bgUrl}/${currentModal.backdrop_path}`} alt="" />
        </div>
    </div>
  )
}
