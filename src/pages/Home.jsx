import React from 'react';
import CategoryList from '../components/CategoryList';
import bannerImage from '../assets/banner.png'; //import image

export default function Home() {
  return (
    <div className='h-[320px] md:h-[540px] w-full md:my-18 my-6'>
      <div className='bg-gray-200 w-full h-full md:rounded-3xl p-24 flex justify-between'>
        <div className='lg:text-6xl/snug  text-2xl/snug w-full playful lg:w-1/2 md:py-8'>
          Books to freshen up your bookshelf
          <button className='btn py-1 bg-emerald-500 lexend text-white mt-4'>
            View the list
          </button>
        </div>

        <div className='hidden lg:flex h-full'>
          <img src={bannerImage} alt='banner' />
        </div>
      </div>

      <CategoryList />
    </div>
  );
}

