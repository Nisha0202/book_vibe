import React from 'react';
import BookList from '../components/BookList';
import bannerImage from '../assets/banner.png'; //import image
import { NavLink } from 'react-router-dom';


export default function Home() {
  return (
    <div className='h-[320px] md:h-[540px] w-full md:my-18 my-6'>
      <div className='bg-gray-200 w-full h-full md:rounded-3xl md:p-24 p-12 flex justify-between'>
        <div className='lg:text-6xl/snug  text-3xl/snug w-full playful lg:w-1/2 md:py-8 grid place-items-center md:place-items-start text-center md:text-left'>
          Books to freshen up your bookshelf
          <button className='btn py-1 bg-emerald-500 lexend text-white mt-4'>
            <NavLink to={'/bookmark'}>  View the list</NavLink>

          </button>
        </div>

        <div className='hidden lg:flex h-full'>
          <img src={bannerImage} alt='banner' />
        </div>
      </div>


      {/* ALL book showing as menu */}
      <BookList />


    </div>
  );
}

