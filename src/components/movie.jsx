import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getMovieApi } from "../store/movie";

const apiImg=import.meta.env.VITE_API_IMAGE_URL


export default function Movie() {
   const [currentPage,setCurrentPage]=useState(1)
    const dispatch=useDispatch()
    const itemsPer=8

    const {data,status}=useSelector(state=>state.movie)

    useEffect(()=>{
        dispatch(getMovieApi())
    },[])

    const totalPage=Math.ceil(data.length/itemsPer)
    const currentData=data.slice((currentPage-1)*itemsPer,currentPage*itemsPer)
    const per=[]
   

   
    if(status==='fail'){
        return <div>Fail</div>
    }
    if(status==='loading'){
        return <div>Loading</div>
    }
    if(status==='success'){
        for(let i=1;i<=totalPage;i++){
            per.push(i)
            console.log(per)
        }
        return (
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-2" >
                    {data && currentData.map(d=>(
                        <div key={d.id} className="w-[300px]  h-50 bg-zinc-900 my-4  rounded-md group" >
                            <img src={`${apiImg}/${d.poster_path}`} className="rounded-md group-hover:scale-x-110 transition-all duration-300"  />
                            <div className="flex flex-col">
                                <h1 className="text-lg font-medium group-hover:text-xl  transition-all duration-200">{d.original_title}</h1>
                             
                                    <p className="flex gap-x-1 items-center">Imd:<FaStar className="text-yellow-300" />{d.vote_average} </p>
                                
                            </div>
                        </div>
                    ))}
                </div>
                <ul className="flex items-center justify-center gap-4">
                    {per.length>0 && per.map(item=>(
                        <li key={item} className={` hover:bg-indigo-800 px-3 py-1 rounded-full font-medium ${item===currentPage ? 'bg-red-500' : 'bg-indigo-500'}`} onClick={()=>setCurrentPage(item)}>
                           <button>
                           {item}
                           </button>
                        </li>
                    ))}
                </ul>
            </div>
          )
    }


   
    
  
}
