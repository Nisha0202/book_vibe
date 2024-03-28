import React from 'react'
import { GoPeople } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { FaRegFileAlt } from "react-icons/fa";

export default function Read({ fav }) {
  return (
    <div className='flex flex-col gap-4'>
      {fav.map(book => <div className='mt-2 flex flex-col lg:flex-row  gap-4 lg:gap-8 border-2 lg:p-6 p-4 rounded-2xl' key={book.bookId}>

        <div className='image '>
          <img src={book.image} className='w-56 h-60 rounded-xl'></img>
        </div>



        <div className='content'>
          <h1 className='text-xl md:text-2xl font-bold playful'>{book.bookName}</h1>
          <p className='text-gray-600 text-base font-semibold lenend py-4'>By: {book.author}</p>

          <div className="px-0 pb-6 flex gap-4 items-center">
            <span className='text-sm/8  lexend text-sm:'>Tag</span>
            <span className="inline-block font-bold bg-gray-200 rounded-full px-3 py-2 text-sm text-emerald-500">#{book.tags[0]}</span>
            <span className="inline-block font-bold bg-gray-200 rounded-full px-3 py-2 text-sm  text-emerald-500 ">#{book.tags[1]}</span>
            <p className='text-sm flex gap-1 items-center'><GrLocation />Year of Publishing:{book.yearOfPublishing}</p>
          </div>

          <div className='flex justify-between lexend text-sm text-gray-500'>
            <p className='flex items-center gap-2'><GoPeople /> Publisher: {book.publisher}</p>
            <p className='flex items-center gap-2'><FaRegFileAlt /> Number of Pages: {book.totalPages}</p>
          </div>
          <div className='flex gap-4 mt-2 py-4 border-t-2'>
            <p className='inline-block bg-blue-100 rounded-full px-3 py-2 text-sm text-blue-600 lexend'>
              Catergory: {book.category}</p>
              <p className='inline-block bg-orange-100 rounded-full px-3 py-2 text-sm text-orange-600 lexend'>
              Rating: {book.rating}</p>
              <p className='inline-block bg-emerald-500 rounded-full px-3 py-2 text-sm text-white lexend'>
              View more</p>




          </div>






        </div>



















      </div>


      )}
    </div>
  )
}

