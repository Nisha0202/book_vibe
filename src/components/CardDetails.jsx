import React from 'react'
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { saveDataLocal } from './utility/saveDataLocal';


export default function CardDetails() {

  const data = useLoaderData();
  const { id } = useParams();

  // 'books' is a property of 'data'
  const { books } = data;


  const book = books.find(book => book.bookId === parseInt(id));


  const [isClicked, setIsClicked] = useState(false);

  const handleAdd = () => {

    saveDataLocal(id);



    if (!isClicked) {
      setIsClicked(true);
      toast('Added to read!', {
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
    <div className='border-[1px] border-black my-4 px-2 lg:px-0'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full'>
        <div className='lg:w-full w-full lg:h-[610px] h-80 md:w-72 mx-auto lg:mx-0 rounded-2xl' >
          <img src={book.image} alt="" className='w-full h-full rounded-2xl border-[2px] border-base-400 object-fill' />

        </div>

        {/* details */}
        <div className='w-full'>


          <div class="flex flex-col w-full gap-2">
            <h1 className=' playful md:text-4xl text-xl font-bold text-black'>{book.bookName}</h1>
            <div className='flex flex-col gap-4'>
              <p className='text-gray-600 text-base font-semibold lexend'>By: {book.author}</p>
              <p className='text-gray-600 text-base font-semibold lexend border-y-2 py-2'>{book.category}</p>
              <p className=' font-normal lg:text-sm/8 text-xs/9'><span className='font-bold lexend lg:text-sm/8 text-xs'>Review:</span> {book.review}</p>
              
                <div className="px-0 pb-6 border-b-2 *:font-bold flex gap-4">
                  <span className='text-sm/8  lexend text-sm:'>Tag</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm text-emerald-500">#{book.tags[0]}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm  text-emerald-500 ">#{book.tags[1]}</span>
                
                </div>

                <table className='max-w-60 text-xs h-32'>
                  <tr> <td>Number of Pages:</td>   <th>{book.totalPages}</th> </tr>
                  <tr> <td>Publisher:</td>   <th>{book.publisher}</th> </tr>
                  <tr> <td>Year of Publishing:</td>   <th>{book.yearOfPublishing}</th> </tr>
                  <tr> <td>Rating:</td>   <th>{book.rating}</th> </tr>

                </table>
           
            </div>

          </div>

          {/* read */}
        <div className='flex items-center'>
          <button className='btn btn-outline' onClick={handleAdd}>
            {isClicked ? 'Already Read' : 'Read'}
          </button>
        </div>
        </div>



        {/* <div className='cols-span-1 flex items-center '>
          <button className='btn text-white bg-indigo-600' onClick={handleAdd}>
            {isClicked ? 'Added to favourite' : 'Add to favourite'}
          </button>
        </div> */}
      </div>
      <div className='relative index-z-999'><ToastContainer /></div>


    </div>
  )
}

