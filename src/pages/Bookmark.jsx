import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, Route, Routes } from 'react-router-dom';
import { getStoredData } from '../components/utility/saveDataLocal';
import { NavLink } from 'react-router-dom';
import Read from '../components/Read';

import Wishlist from '../components/Wishlist';

export default function Bookmark() {
  const [fav, setFav] = useState([]);
  const [display, setDisplay] = useState([]);

  const data = useLoaderData();
  const { id } = useParams();

  // 'books' is a property of 'data'
  const { books } = data;


  useEffect(() => {
    const storedFav = getStoredData();
    const storedFavIds = storedFav.map(id => parseInt(id, 10));
    const applied = books.filter(book => storedFavIds.includes(book.bookId));
    setFav(applied);
    setDisplay(applied);
  }, [books]);

  console.log(fav);

  return (

    <div className='lg:px-0 px-2 my-6' >

      <div className=' grid place-items-center'>
        <div className='bg-gray-200 w-full h-full md:rounded-2xl  p-4'>
          <div className='lg:text-3xl/snug font-bold  text-xl/snug w-full grid place-items-center text-center '>
            Books

          </div>
        </div>
        <div className="dropdown dropdown-end my-4">
          <div tabIndex={0} role="button" className="btn btn-md text-white m-1 bg-emerald-500">Sort By <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li ><a onClick={() => handleFilter('romance')}>Romance</a></li>
            <li ><a onClick={() => handleFilter('all')} >All</a></li>
          </ul>
        </div>
      </div>

      <div className='navbar px-0'>
        <ul class="menu menu-horizontal gap-4 *:p-2 px-0">
          <NavLink className={({ isActive }) => (isActive ? "link2-active" : "link")} to={'/bookmark/read'} style={{ textDecoration: 'none' }} >Read Books</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "link2-active" : "link")} to={'/bookmark/wishlist'} style={{ textDecoration: 'none' }}>Wishlist Books</NavLink>
        </ul>
      </div>

{/* view read or wishlist */}
      <div className='view'>
        <Routes>
          <Route path="read" element={<Read />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Routes>
      </div>



  



    </div >);
}
