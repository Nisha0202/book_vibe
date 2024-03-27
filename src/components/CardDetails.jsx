import React from 'react'
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from 'react-router-dom'
  import { ToastContainer, toast } from 'react-toastify';
import { saveDataLocal } from './utility/saveDataLocal';
export default function CardDetails() {

  const genres = useLoaderData();
  const { id } = useParams();

  const genre = genres.find(genre => genre.id === parseInt(id));

  const [isClicked, setIsClicked] = useState(false);

  const handleAdd = () => {

    saveDataLocal(id);



    if (!isClicked) {
      setIsClicked(true);
      toast('Added!', {
        position: "top-right", 
        autoClose: 3000,  
        hideProgressBar: false,
        closeOnClick: true,
        progress: true,
        style: { 
          padding: '10px',
          background: 'rgb(79 70 229)',
          color: '#fff'
        }
      });
    }
  };
  

  return (
    <div className='px-2' style={{ height: 'calc(100vh - 300px)' }}>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 my-6 md:my-12'>
        <div className='md:col-span-3 flex gap-4 md:gap-8 '>
          <img src={genre.icon} alt="" className='w-56 border-[1px] border-base-300 h-56 object-cover' />
          <div className='max-w-56'>
            <h1 className='font-bold'> {genre.name} </h1>
            <p>{genre.description}</p>

          </div>

        </div>

        <div className='cols-span-1 flex items-center '>
        <button className='btn text-white bg-indigo-600' onClick={handleAdd}>
          {isClicked ? 'Added to favourite' : 'Add to favourite'}
        </button>
        </div>
      </div>
      <div className='relative index-z-999'><ToastContainer/></div>


    </div>
  )
}

